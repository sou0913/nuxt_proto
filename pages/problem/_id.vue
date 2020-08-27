<template>
  <div>
    <p>問題: {{ title }}</p>
    <p>{{ senario }}</p>
    <FindProblem
      v-if="isFindProblem" 
      :target="target"
      :statement="statement"
    />
    <ReplaceProblem
      v-if="isReplaceProblem"
      :statement="statement"
      :after-replace-answer="afterReplaceAnswer"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      replacement: "",
      title: "",
      target: "",
      statement: "",
      senario: "",
      afterReplaceAnswer: ""
    };
  },
  computed: {
    isFindProblem() {
      return this.type == "FindProblem";
    },
    isReplaceProblem() {
      return this.type == "ReplaceProblem";
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
    this.senario = response["senario"];
    this.afterReplaceAnswer = response["after_replace_answer"];
  }
};
</script>
