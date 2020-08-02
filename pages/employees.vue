<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      @input="fetchEmployees"
    ></b-pagination>
    <b-table striped hover :items="employees">
      <template v-slot:cell(name)="data">
        <b-link :to="'/employee/' + data.item.id">{{ data.value }}</b-link>
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
      employees: [],
    };
  },
  async fetch() {
    this.fetchEmployees(1)
  },
  methods: {
    async fetchEmployees(page) {
      const response = await this.$axios.$get(`http://localhost:3000/employees?page=${page}`)
      this.employees = response['employees']
      this.rows = response['total_rows']
    }
  }
}
</script>
