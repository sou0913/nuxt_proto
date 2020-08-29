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
      <b-form-group label="target" v-if="isFindProblem">
        <b-form-input v-model="form.target"></b-form-input>
      </b-form-group>
      <b-form-group label="senario" v-if="isReplaceProblem">
        <b-form-input v-model="form.senario"></b-form-input>
      </b-form-group>
      <b-form-group label="after_replacement_answer" v-if="isReplaceProblem">
        <b-form-input v-model="form.after_replacement_answer"></b-form-input>
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
        title: "",
        statement: "",
        target: "",
        senario: "",
        after_replacement_answer: ""
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
      return this.form.type == "FindProblem"
    },
    isReplaceProblem() {
      return this.form.type == "ReplaceProblem"
    }
  },
  methods: {
    async fetchProblemTypes() {
      const response = await this.$axios.$get(`/problem_types`);
      this.problemTypes = response;
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>
