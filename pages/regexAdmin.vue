<template>
  <b-container>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group label="type">
        <b-form-select
          v-model="form.type"
          :options="problemTypes"
        ></b-form-select>
      </b-form-group>
      <b-form-group label="title">
        <b-form-input v-model="form.title"></b-form-input>
      </b-form-group>
      <b-form-group label="statement">
        <b-form-input v-model="form.statement"></b-form-input>
      </b-form-group>
      <b-form-group label="matches" v-if="isFindProblem">
        <b-form-tags v-model="form.matches"></b-form-tags>
      </b-form-group>
      <b-form-group label="noMatches" v-if="isFindProblem">
        <b-form-tags v-model="form.noMatches"></b-form-tags>
      </b-form-group>
      <b-form-group label="target" v-if="isFindProblem">
        <b-form-input v-model="form.target"></b-form-input>
      </b-form-group>
      <b-form-group label="senario" v-if="isReplaceProblem">
        <b-form-input v-model="form.senario"></b-form-input>
      </b-form-group>
      <b-form-group label="afterReplaceAnswer" v-if="isReplaceProblem">
        <b-form-input v-model="form.afterReplaceAnswer"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: "",
        title: "",
        statement: "",
        matches: [],
        noMatches: [],
        target: "",
        senario: "",
        afterReplaceAnswer: ""
      },
      problemTypes: [],
      show: true
    };
  },
  async fetch() {
    this.fetchProblemTypes();
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
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        await this.$axios.$post(`/problems`, {
          problem: this.form
        });
        alert("保存しました");
      } catch (e) {
        alert(e);
      }
    }
  }
};
</script>
