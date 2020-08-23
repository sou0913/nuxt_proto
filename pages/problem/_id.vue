<template>
  <div>
    <p>問題:aをbに入れ替えてください</p>
    <b-form-input v-model="regex" :state="regexState" placeholder="正規表現"></b-form-input>
    <!-- <b-form-input v-model="replacement" placeholder="置換後文字列"></b-form-input> -->
    <p>{{ target }}</p>
    <div v-show="regexState">
    <p>正解!</p>
    <nuxt-link to="/regex">一覧へ戻る</nuxt-link>
    <nuxt-link :to="'/problem/' + (parseInt(this.$route.params.id) + 1)">次の問題へ</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regex: '',
      // replacement: '',
      target: ''
    };
  },
  computed: {
    regexState() {
      return this.target == this.target.match(this.regex) ? true : false
    }
  },
  async fetch() {
    const response = await this.$axios.$get(`/problems/${this.$route.params.id}`)
    this.target = response['target']
  }
};
</script>
