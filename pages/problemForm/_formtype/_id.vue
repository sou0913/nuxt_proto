<template>
  <b-container>
    <b-form @submit="handleSubmit" v-if="show">
      <b-form-group label="type">
        <b-form-select
          :options="problemTypes"
          v-model="form.type"
        ></b-form-select>
      </b-form-group>

      <b-form-group label="title（問題タイトル）">
        <b-form-input v-model="form.title"></b-form-input>
      </b-form-group>

      <b-form-group label="matches（マッチさせる単語）" v-if="isFindProblem">
        <b-form-tags v-model="form.matches"></b-form-tags>
      </b-form-group>

      <b-form-group
        label="noMatches（マッチさせない単語）"
        v-if="isFindProblem"
      >
        <b-form-tags v-model="form.noMatches"></b-form-tags>
      </b-form-group>

      <b-form-group label="senario（問題文）" v-if="isReplaceProblem">
        <b-form-input v-model="form.senario"></b-form-input>
      </b-form-group>

      <b-form-group
        label="statement（置換させる対象　例: 100円）"
        v-if="isReplaceProblem"
      >
        <b-form-input v-model="form.statement"></b-form-input>
      </b-form-group>
      <b-form-group
        label="afterReplaceAnswer（置換後の答え 例: ¥100）"
        v-if="isReplaceProblem"
      >
        <b-form-input v-model="form.afterReplaceAnswer"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: "",
        replacement: "",
        title: "",
        statement: "",
        senario: "",
        afterReplaceAnswer: "",
        matches: [],
        noMatches: []
      },
      problemTypes: [],
      show: true
    };
  },
  async fetch() {
    this.fetchProblemTypes();
    this.fetchProblem() ;
  },
  computed: {
    isFindProblem() {
      return this.form.type == "FindProblem";
    },
    isReplaceProblem() {
      return this.form.type == "ReplaceProblem";
    }
  },
  methods: {
    async fetchProblemTypes() {
      const response = await this.$axios.$get(`/problem_types`);
      this.problemTypes = response;
    },
    async fetchProblem() {
      if (this.$route.params.formtype == "new") {
        return;
      }
      const response = await this.$axios.$get(
        `/problems/${this.$route.params.id}`
      );
      this.form.type = response["type"];
      this.form.title = response["title"];
      this.form.target = response["target"];
      this.form.statement = response["statement"];
      this.form.senario = response["senario"];
      this.form.afterReplaceAnswer = response["after_replace_answer"];
      this.form.matches = response["matches"];
      this.form.noMatches = response["no_matches"];
    },
    handleSubmit(evt) {
      evt.preventDefault();
      if (this.$route.params.formtype == "new") {
        this.createProblem();
      } else if (this.$route.params.formtype == "edit") {
        this.updateProblem();
      }
    },
    async createProblem() {
      try {
        await this.$axios.$post(`/problems`, {
          problem: this.form
        });
        alert("登録しました");
      } catch (e) {
        alert(e);
      }
    },
    async updateProblem(params) {
      try {
        await this.$axios.$put(`/problems/${this.$route.params.id}`, {
          problem: this.form
        });
        alert("更新しました");
      } catch (e) {
        alert(e);
      }
    }
  }
};
</script>
