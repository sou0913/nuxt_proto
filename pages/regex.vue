<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      @input="fetchProblems"
    ></b-pagination>
    <b-spinner v-if="loading" variant="primary" label="Spinning"></b-spinner>
    <b-table  v-else striped hover :items="problems">
      <template v-slot:cell(title)="data">
        <b-link :to="'/problem/' + data.item.id">{{ data.value }}</b-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      rows: 0,
      problems: [],
    };
  },
  async fetch() {
    this.fetchProblems(1)
  },
  computed: {
    loading() {
      return this.problems.length == 0 ? true : false
    }
  },
  methods: {
    async fetchProblems(page) {
      const response = await this.$axios.$get(`/problems?page=${page}`)
      this.problems = response['problems']
      this.rows = response['total_rows']
    }
  }
}
</script>
