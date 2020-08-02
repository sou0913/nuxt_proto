<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Your Name:">
        <b-form-input
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your service_years:">
        <b-form-input
          v-model="form.service_years"
          required
          placeholder="Enter service_years"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Type:">
        <b-form-select
          id="input-3"
          v-model="form.type"
          :options="types"
          required
        ></b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        type: "",
        service_years: ""
      },
      types: ["Engineer", "Salesman"]
    };
  },
  async fetch() {
    this.form= await this.$axios.$get(`http://localhost:3000/employees/${this.$route.params.id}`)
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>
