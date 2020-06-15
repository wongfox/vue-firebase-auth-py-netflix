import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/********************* Configuración de Firebase *********************/
var firebase = require("firebase/app");

// agregamos los servicios adicionales
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC1Q1STAcoronFZGq9Eu8ezdMvQUwigKpY",
  authDomain: "mi-netflix-vue.firebaseapp.com",
  databaseURL: "https://mi-netflix-vue.firebaseio.com",
  projectId: "mi-netflix-vue",
  storageBucket: "mi-netflix-vue.appspot.com",
  messagingSenderId: "1021400671358",
  appId: "1:1021400671358:web:f4233ff874c9fd5987242f"
};

// Initializa Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore();

export default firebaseApp.firestore();
/******************* Fin configuración de Firebase *******************/

/********************* Configuración Bootstrap ***********************/
import {
  BootstrapVue
} from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/********************* Configuración Bootstrap ***********************/

/********************* Configuración Vue Axios ***********************/
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
/******************* fin Configuración Vue Axios *********************/

Vue.config.productionTip = false

/******** Validamos el estado de un usuario si esta logueado *********/
firebase.auth().onAuthStateChanged((user) => {
  //console.log(user);
  if (user) {
    // invoca a una acción del store
    store.dispatch('detectarUsuario', {
      email: user.email,
      uid: user.uid
    });
  } else {
    // invoca a una acción del store
    store.dispatch('detectarUsuario', null);
  }

  /* este código se ha movido hacia este punto porque sino la aplicación hace las validaciones
      antes de que firebase responda y eso genera que cada vez que se actualice la aplicación
      este regrese a la página por default que en este caso es "Ingreso"
  */
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});
/****** fin Validamos el estado de un usuario si esta logueado *******/