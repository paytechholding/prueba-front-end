<template>
  <div>
    <h1>Clientes<button>+</button></h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Rut</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key='index' v-for='(customer, index) in customers'>
          <td>{{ customer.name }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.rut }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Firebase from 'firebase/app'
import 'firebase/database'

export default {
  name: 'Customers',
  mounted () {
    Firebase.database().ref('customers').once('value').then(data => {
      this.customers = data.val()
    })
  },
  data () {
    return {
      customers: []
    }
  }
}
</script>

<style lang="sass">
  h1
    color: #5bb12f
    font-weight: 100
    text-indent: 20px
    button
      border-radius: 100%
      border: 0
      width: 25px
      height: 25px
      text-align: center
      background: #5bb12f
      color: #fff
      position: relative
      font-size: 20px
      margin: 0 0 0 15px
      top: -3px
  table
    width: 100%
    border-spacing: 0
    thead
      th
        padding: 15px 0
        text-indent: 25px
        font-weight: 100
        text-transform: uppercase
        text-align: left
        color: #5bb12f
    tbody
      tr:nth-child(odd)
        td
          background: #f9f9f9
      td
        padding: 15px 0
        text-indent: 25px
        font-size: 13px
        font-weight: 100
</style>
