<template>
  <div>
    <p>{{ target }}にマッチさせてください</p>
    <b-form-input
      v-model="regex"
      :state="regexState"
      placeholder="正規表現"
    ></b-form-input>
    <p v-html="coloredStatement"></p>
    <div v-show="regexState">
      <p>正解!</p>
      <nuxt-link to="/regex">一覧へ戻る</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['target', 'statement'],
  data() {
    return {
      regex: "",
    };
  },
  computed: {
    regexState() {
      try {
        return this.target == this.statement.match(this.regex);
      } catch (e) {
        if (e instanceof SyntaxError) {
        } else {
          // logMyErrors(e);
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
          // logMyErrors(e);
        }
      }
    }
  }
};
</script>
