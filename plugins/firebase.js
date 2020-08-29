import * as firebase from "firebase/app"
import 'firebase/auth'
import * as firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: "AIzaSyB4X5Vj5GI1NdZ0JsLY0P5ROtiL2eUKdLY",
  authDomain: "rails-container-prototype.firebaseapp.com",
  databaseURL: "https://rails-container-prototype.firebaseio.com",
  projectId: "rails-container-prototype",
  storageBucket: "rails-container-prototype.appspot.com",
  messagingSenderId: "902276587803",
  appId: "1:902276587803:web:97def297c35af3fc1373be"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const ui = new firebaseui.auth.AuthUI(firebase.auth());