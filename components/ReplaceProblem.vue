<template>
  <div>
    <b-form-input v-model="regex" placeholder="正規表現"></b-form-input>
    <b-form-input
      v-if="after_replace_answer"
      v-model="replacement"
      :state="replacementState"
      placeholder="置換後文字列"
    ></b-form-input>
    <p>置換後文字列： {{ after_replace }}</p>
    <div v-show="replacementState">
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
      target: "",
      statement: "",
      after_replace_answer: ""
    };
  },
  computed: {
    after_replace() {
      try {
        return this.state.ment.replace(this.regex, this.replacement);
      } catch (e) {
        if (e instanceof SyntaxError) {
        } else {
          // logMyErrors(e); ここには定義されていない模様
        }
      }
    },
    replacementState() {
      try {
        return this.after_replace_answer == this.after_replace;
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
