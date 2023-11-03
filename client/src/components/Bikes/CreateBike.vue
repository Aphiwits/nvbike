<template>
  <div>
  <h1>Create bike</h1>
  <form v-on:submit.prevent="createbike">
  <p>ชนิดจักรยาน: <input type="text" v-model="bike.type"></p>
  <p>ขนานจักยาน: <input type="text" v-model="bike.size"></p>
  <p>ร้านขาย: <input type="text" v-model="bike.store"></p>
  <p>ราคา: <input type="text" v-model="bike.price"></p>
  <p><button type="submit">create</button></p>
  </form>
  </div>
 </template>
 <script>
 import BikesService from '@/services/BikesService'
 export default {
  data () {
  return {
  bike: {
  type: '',
  size: '',
  store: '',
  price: '',
  }
  }
  },
  methods: {
  async createbike () {
  try {
  await BikesService.post(this.bike)
  this.$router.push({
  name: 'bikes'
  })
  } catch (err) {
  console.log(err)
  }
  }
  }
 }
 </script>
 <style scoped>
 </style>