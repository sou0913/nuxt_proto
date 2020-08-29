<template>
  <b-container>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </b-container>
</template>

<script>
import * as firebase from "firebase/app"
import 'firebase/auth'
import { ui } from "../plugins/firebase";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  mounted() {
    ui.start("#firebaseui-auth-container", {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function() {
          document.getElementById("loader").style.display = "none";
        }
      },
      signInFlow: "popup",
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    });
  }
};
</script>
