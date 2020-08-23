<template>
  <div>
    <p>問題:aをbに入れ替えてください</p>
    <b-form-input v-model="regex" placeholder="正規表現"></b-form-input>
    <b-form-input v-model="replacement" placeholder="置換後文字列"></b-form-input>
    <p>a</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regex: '',
      replacement: '',
    };
  }
  // async fetch() {
  //   this.form= await this.$axios.$get(`http://localhost:3000/employees/${this.$route.params.id}`)
  // }
};
</script>
