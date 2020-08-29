<template>
  <div>
    <p>{{ statement }}</p>
    <b-form-input v-model="regex" placeholder="正規表現"></b-form-input>
    <b-form-input
      v-model="replacement"
      :state="replacementState"
      placeholder="置換後文字列"
    ></b-form-input>
    <p>置換後文字列： {{ afterReplace }}</p>
    <p>答え： {{ afterReplaceAnswer }}</p>
    <div v-show="replacementState">
      <p>正解!</p>
    </div>
    <nuxt-link to="/regex">一覧へ戻る</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['statement', 'afterReplaceAnswer'],
  data() {
    return {
      regex: "",
      replacement: "",
    };
  },
  computed: {
    afterReplace() {
      try {
        return this.statement.replace(new RegExp(this.regex), this.replacement);
      } catch (e) {
        if (e instanceof SyntaxError) {
        } else {
          // logMyErrors(e); ここには定義されていない模様
        }
      }
    },
    replacementState() {
      try {
        return this.afterReplaceAnswer == this.afterReplace;
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
