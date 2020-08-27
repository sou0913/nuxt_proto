<template>
  <div>
    <p>問題: {{ title }}</p>
    <p>
      下の文字列から{{
        target
      }}にマッチする正規表現を入力してください（/は不要です）
    </p>
    <p v-html="coloredStatement"></p>
    <b-form-input
      v-model="regex"
      :state="regexState"
      placeholder="正規表現"
    ></b-form-input>
    <b-form-input
      v-if="after_replace_answer"
      v-model="replacement"
      :state="replacementState"
      placeholder="置換後文字列"
    ></b-form-input>
    <div v-show="regexState">
      <p>正解!</p>
      <nuxt-link to="/regex">一覧へ戻る</nuxt-link>
    </div>
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
    regexState() {
      try {
        return this.target == this.statement.match(this.regex);
      } catch (e) {
        if (e instanceof SyntaxError) {
        } else {
          logMyErrors(e);
        }
      }
    },
    replacementState() {
      try {
        const after_replace = this.statement.replace(
          this.regex,
          this.replacement
        );
        return this.after_replace_answer == after_replace;
      } catch (e) {
        if (e instanceof SyntaxError) {
        } else {
          logMyErrors(e);
        }
      }
    },
    coloredStatement() {
      try {
        return this.statement.replace(
          new RegExp(`([\s\S]*)(${this.regex})([\s\S]*)`),
          "<font color='red'>$2</font>"
        );
      } catch (e) {
        if (e instanceof SyntaxError) {
        } else {
          logMyErrors(e);
        }
      }
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
