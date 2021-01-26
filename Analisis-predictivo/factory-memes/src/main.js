import Vue from "vue";
import App from "./App.vue";
import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

//import VueFire from 'vuefire'
import router from "./router/index.js";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBZM8dCaf3H6ycYMJXkMXJSAjFC0ya6c_0",
  authDomain: "memes-inicio.firebaseapp.com",
  databaseURL: "https://memes-inicio-default-rtdb.firebaseio.com",
  projectId: "memes-inicio",
  storageBucket: "memes-inicio.appspot.com",
  messagingSenderId: "941976510706",
  appId: "1:941976510706:web:ea492d2ba9bf858514f06b",
  measurementId: "G-83V1P2D8ZW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
export const storage = firebase.storage().ref("/images");

Vue.use(firestorePlugin);

new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: { App }
}).$mount("#app");
