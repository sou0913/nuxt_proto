<template>
  <b-modal
    id="modal-prevent-closing"
    ref="modal"
    title="認証します"
    @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk"
  >
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        :state="emailState"
        label="メールアドレス"
        label-for="email-input"
        invalid-feedback="メールアドレスを入力お願いします"
      >
        <b-form-input
          id="email-input"
          v-model="email"
          :state="emailState"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        :state="passwordState"
        label="パスワード"
        label-for="password-input"
        invalid-feedback="パスワードを入力お願いします"
      >
        <b-form-input
          id="password-input"
          v-model="password"
          :state="passwordState"
          required
        ></b-form-input>
      </b-form-group>
    </form>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      emailState: null,
      password: "",
      passwordState: null
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.emailState = valid;
      return valid;
    },
    resetModal() {
      this.email = "";
      this.emailState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      this.signIn();
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    async signIn() {
      this.$fireAuth
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(e) {
          alert(e);
        });
    }
  }
};
</script>
