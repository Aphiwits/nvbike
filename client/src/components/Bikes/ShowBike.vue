<template>
  <div>
 <h1>Show bike</h1>
 <p>bike id: {{ bike.id }}</p>
 <p>ชนิดจักรยาน: {{ bike.type }}</p>
 <p>ขนานจักรยาน: {{ bike.size }}</p>
 <p>ร้านขาย: {{ bike.store }}</p>
 <p>ราคา: {{ bike.price }}</p>
 <div><button @click="navigateTo('/bikes')">กลับ</button></div>
  </div>
 </template>
 <script>
import BikesService from "@/services/BikesService";

export default {
  data() {
    return {
      bike: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let bikeId = this.$route.params.bikeId;
      this.bike = (await BikesService.show(bikeId)).data;
      console.log(this.bike);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>