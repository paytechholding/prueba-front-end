<template>
  <div class='container'>
    <div class='header'>
      <div class='logo'></div>
      <div class='user'>
        <div>{{ userEmail }}</div>
        <button class='logout' v-on:click='logout'>logout <span>x</span></button>
      </div>
    </div>
    <router-view class='page'/>
  </div>
</template>

<script>
import Firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'AdminLayout',
  data () {
    return {
      userEmail: ''
    }
  },
  mounted () {
    this.userEmail = Firebase.auth().currentUser.email
  },
  methods: {
    logout () {
      Firebase.auth().signOut()
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="sass">
  @font-face
    font-family: Poppins-Regular
    src: url('../assets/Poppins-Regular.ttf')
  @font-face
    font-family: Poppins-Medium
    src: url('../assets/Poppins-Medium.ttf')
  body
    margin: 0
    background: #f2f2f2
    font-family: Poppins-Regular
  .container
    max-width: 1000px
    margin: 40px auto
    background: #ffffff
    border-radius: 10px
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1)
    -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1)
    -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1)
    -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1)
    -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1)
    .header
      border-bottom: 1px solid #eee
      padding: 40px 45px
      display: flex
      justify-content: space-between
      .logo
        width: 200px
        height: 60px
        background: url('../assets/logo.png') center center no-repeat
      .user
        div
          color: #aaa
          font-size: 12px
          font-weight: 100
          margin-top: 12px
        .logout
          border-radius: 20px
          border: 0
          padding: 5px 8px
          background: #da6970
          color: #fff
          font-size: 10px
          text-indent: 5px
          float: right
          margin-top: 3px
          cursor: pointer
          span
            border-radius: 100%
            border: 0
            padding: 5px 7px
            text-align: center
            background: #c52e38
            color: #fff
            margin-right: -7px
            position: relative
    .page
      padding: 15px 35px 35px 35px
</style>
