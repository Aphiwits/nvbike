<template>
<div>
      <h1>Get All Users</h1>
      <div><h2>จำนวน User ทั้งหมด {{ users.length }} คน</h2></div>
      <div><button @click="navigateTo('/user/create')">เพื่มสมาชิก</button>
        <button @click="navigateTo('/bikes')">ดู List Movie ทั้งหมด</button>
        <button v-on:click="logout" >Logout</button></div><hr>
      <div v-for="i in users" v-bind:key="i.id">
        <div>ID: {{ i.id }}</div>
        <div>ชื่อ: {{ i.name }}</div>
        <div>นามสกุล: {{ i.lastname }}</div>
        <div>Email: {{ i.email }}</div>
        <div>Status: {{ i.status }}</div>
        
        <div><button v-on:click="navigateTo('/user/'+i.id)">ดูข้อมูลผู้ใช้</button>
        <button @click="navigateTo('/user/edit/'+i.id)">edit user</button>
        <button @click="deleteUser(i)">delete user</button></div>
        <hr>
      </div>
    </div>
  </template>
  
  <script>
  import UsersService from "@/services/UsersService";
  
  export default {
    data() {
      return {
        users: []
      };
    },
    methods:{
      logout () {
 this.$store.dispatch('setToken', null)
 this.$store.dispatch('setUser', null)
 this.$router.push({
 name: 'login'
 })
},
      navigateTo(route){
        this.$router.push(route)
      },
      async deleteUser(user){
        let result = confirm("Want of delete?")
        if (result){
          try{
            await UsersService.delete(user)
            this.refreshData()
          }catch(err){
            console.log(err)
          }
        }
      },
      async refreshData() {
        this.users = (await UsersService.index()).data;
      }
    },
    async created() {
      try{
        this.users = (await UsersService.index()).data;
      }catch (err){
        console.log(err)
      }
      
    }
  };
  </script>
  
  <style></style>