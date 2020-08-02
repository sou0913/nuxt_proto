<template>
  <div>
    <b-table striped hover :items="employees"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: []
    }
  },
  async fetch() {
    this.employees = await this.$axios.$get('http://localhost:3000/employees')
  },
};
</script>
