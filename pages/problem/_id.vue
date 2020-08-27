<template>
  <div>
    <p>問題: {{ title }}</p>
    <p>{{ senario }}</p>
    <FindProblem v-if="isFindProblem" />
    <ReplaceProblem v-if="isReplaceProblem" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      regex: "",
      replacement: "",
      title: "",
      target: "",
      statement: "",
      senario: "",
      after_replace_answer: ""
    };
  },
  computed: {
    isFindProblem() {
      return this.type == "FindProblem"
    },
    isReplaceProblem() {
      return this.type == "ReplaceProblem"
    }
  },
  async fetch() {
    const response = await this.$axios.$get(
      `/problems/${this.$route.params.id}`
    );
    this.type = response["type"];
    this.title = response["title"];
    this.target = response["target"];
    this.statement = response["statement"];
    this.senario = response["senario"]
    this.after_replace_answer = response["after_replace_answer"]
  }
};
</script>
