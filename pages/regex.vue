<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      @input="fetchProblems"
    ></b-pagination>
    <b-button variant="success" to="/problemForm/new">新規追加</b-button>
    <b-button
      v-b-modal.modal-prevent-closing
      variant="primary"
      class="float-right"
      >管理モード</b-button
    >
    <b-spinner v-if="loading" variant="primary" label="Spinning"></b-spinner>
    <b-table v-else striped hover :items="problems" :fields="fields">
      <template v-slot:cell(title)="data">
        <b-link :to="'/problem/' + data.item.id">{{ data.value }}</b-link>
      </template>
      <template v-slot:cell(buttons)="data" v-if="admin">
        <b-button
          size="sm"
          variant="primary"
          :to="'/problemForm/edit/' + data.item.id"
        >
          編集
        </b-button>
        <b-button size="sm" @click="destroyProblem(data.item.id)">
          削除
        </b-button>
      </template>
    </b-table>
    <SignInModal />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      rows: 0,
      problems: [],
      fields: ["id", "title", { key: "buttons", label: "" }],
      admin: false
    };
  },
  async fetch() {
    this.fetchProblems(1);
  },
  created: function() {
    const vi = this;
    this.$fireAuth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        vi.admin = true;
        // ...
      } else {
        // User is signed out.
        vi.admin = false;
        // ...
      }
    });
  },
  computed: {
    loading() {
      return this.problems.length == 0 ? true : false;
    }
  },
  methods: {
    async fetchProblems(page) {
      const response = await this.$axios.$get(`/problems?page=${page}`);
      this.problems = response["problems"];
      this.rows = response["total_rows"];
    },
    async destroyProblem(id) {
      try {
        await this.$axios.$delete(`/problems/${id}`);
        alert("削除しました");
        this.fetchProblems(this.currentPage);
      } catch (e) {
        alert(e);
      }
    }
  }
};
</script>
