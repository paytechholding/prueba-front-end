import Vue from 'vue'
import App from './App'
import router from './router'
import Firebase from 'firebase/app'

Vue.config.productionTip = false

Firebase.initializeApp({
  apiKey: 'AIzaSyB2onjVq0di8c0Z3iT9HwFN05FKGBhQFp8',
  authDomain: 'prueba-front-end.firebaseapp.com',
  databaseURL: 'https://prueba-front-end.firebaseio.com',
  projectId: 'prueba-front-end',
  storageBucket: '',
  messagingSenderId: '41582768532'
})

let AppInstance
Firebase.auth().onAuthStateChanged(() => {
  if (AppInstance) { return }
  /* eslint-disable no-new */
  AppInstance = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
})
