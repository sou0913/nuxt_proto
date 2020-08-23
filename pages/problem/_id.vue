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
    <!-- <b-form-input v-model="replacement" placeholder="置換後文字列"></b-form-input> -->
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
      regex: "",
      // replacement: '',
      title: "",
      target: "",
      statement: ""
    };
  },
  computed: {
    regexState() {
      try {
        return this.target == this.statement.match(this.regex) ? true : false;
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
    },
  },
  async fetch() {
    const response = await this.$axios.$get(
      `/problems/${this.$route.params.id}`
    );
    this.title = response["title"];
    this.target = response["target"];
    this.statement = response["statement"];
  }
};
</script>
