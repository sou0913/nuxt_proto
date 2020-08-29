<template>
  <div>
    <p>マッチさせる：　 {{ matches }}</p>
    <p>マッチさせない： {{ noMatches }}</p>
    <b-form-input
      v-model="regex"
      :state="regexState"
      placeholder="正規表現"
    ></b-form-input>
    <!-- <p v-html="coloredStatement"></p> -->
    <div v-show="regexState">
      <p>正解!</p>
    </div>
    <nuxt-link to="/regex">一覧へ戻る</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["matches", "noMatches"],
  data() {
    return {
      regex: ""
    };
  },
  computed: {
    regexState() {
      try {
        return (
          this.matches.every(v => v.match(this.regex)) &&
          this.noMatches.every(v => !v.match(this.regex))
        );
      } catch (e) {
        if (e instanceof SyntaxError) {
        } else {
          // logMyErrors(e);
        }
      }
    },
    // 応用して再使用する
    // coloredStatement() {
    //   try {
    //     return this.statement.replace(
    //       new RegExp(`([\s\S]*)(${this.regex})([\s\S]*)`),
    //       "<font color='red'>$2</font>"
    //     );
    //   } catch (e) {
    //     if (e instanceof SyntaxError) {
    //     } else {
    //       // logMyErrors(e);
    //     }
    //   }
    // }
  }
};
</script>
