// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vuetify from '@/plugins/vuetify'

import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'
import 'firebase/analytics'
import { saveAs } from 'file-saver'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  saveAs,
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>',
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyDoCO6BPZ52HEWHO5rKdgcM1t86KKpKqhs",
      authDomain: "pc-builder-96dc2.firebaseapp.com",
      databaseURL: "https://pc-builder-96dc2-default-rtdb.firebaseio.com",
      projectId: "pc-builder-96dc2",
      storageBucket: "pc-builder-96dc2.appspot.com",
      messagingSenderId: "746551602996",
      appId: "1:746551602996:web:1d4d5c47e9b751a5d4ff61",
      measurementId: "G-5B37XPF62L"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch('loggedUser', user)
      }
    })
  },
})
