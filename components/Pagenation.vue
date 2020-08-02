<template>
  <div class="overflow-auto">

  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>