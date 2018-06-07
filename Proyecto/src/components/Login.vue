<template>
  <div>
    <form v-on:submit.prevent="send">
      <img src='@/assets/logo.png' />
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="password" type="password" placeholder="Contraseña">
      <button type="submit">Login</button>
      <span v-if="errorMessage">{{ errorMessage }}</span>
      <div>Prueba para evaluación</div>
    </form>
  </div>
</template>

<script>
import Firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      errorMessage: null
    }
  },
  methods: {
    send () {
      Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(sucess => { this.$router.replace('customers') })
        .catch(error => { this.errorMessage = error.message })
    }
  }
}
</script>
