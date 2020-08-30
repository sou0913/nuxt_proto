<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      @input="fetchProblems"
    ></b-pagination>
    <b-spinner v-if="loading" variant="primary" label="Spinning"></b-spinner>
    <b-table v-else striped hover :items="problems" :fields="fields">
      <template v-slot:cell(title)="data">
        <b-link :to="'/problem/' + data.item.id">{{ data.value }}</b-link>
      </template>
      <template v-slot:cell(buttons)="data">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      rows: 0,
      problems: [],
      fields: ["id", "title", { key: "buttons", label: "" }]
    };
  },
  async fetch() {
    this.fetchProblems(1);
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
