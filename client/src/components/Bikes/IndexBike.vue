<template>
  <div>
 <h2>จํานวนจักยานทั้งหมด {{bikes.length}}</h2><div><button @click="navigateTo('/bike/create')">เพื่มข้อมูลจักรยาน</button></div><hr>
 <div v-for="i in bikes" v-bind:key="i.id">
  <p>bike id: {{ i.id }}</p>
  <p>ชนิดจักรยาน: {{ i.type }}</p>
  <p>ขนานจักรยาน: {{ i.size }}</p>
  <p>ร้านขาย: {{ i.store }}</p>
  <p>ราคา: {{ i.price }} บาท</p>
  <div><button v-on:click="navigateTo('/bike/'+i.id)">ดูข้อมูลจักรยาน</button>
  <button @click="navigateTo('/bike/edit/'+i.id)">แก้ไขจักรยาน</button>
  <button @click="deletebike(i)">ลบ</button></div>
  <hr>
 </div>
  </div>
 </template>
 <script>
import BikesService from "@/services/BikesService";

export default {
data() {
  return {
    bikes: []
  };
},
methods: {
  navigateTo(route) {
    this.$router.push(route);
  },
  async deletebike(bike) {
    let result = confirm("Want of delete?");
    if (result) {
      try {
        await BikesService.delete(bike);
        this.refreshData();
      } catch (err) {
        console.log(err);
      }
    }
  },
  async refreshData() {
    this.bikes = (await BikesService.index()).data;
  }
},
async created() {
  try {
    this.bikes = (await BikesService.index()).data;
  } catch (err) {
    console.log(err);
  }
}
};
</script>

<style></style>