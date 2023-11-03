<template>
  <div>
    <h1>Edit bike</h1>
    <form v-on:submit.prevent="editbike">
      <p>ชนิดจักรยาน: <input type="text" v-model="bike.type" /></p>
      <p>ขนานจักรยาน: <input type="text" v-model="bike.size" /></p>
      <p>ร้านขาย: <input type="text" v-model="bike.store" /></p>
      <p>ราคา: <input type="text" v-model="bike.price" /></p>
      <p><button type="submit">Edit</button></p>
    </form>
    <hr />
    <div>
      <p>ชนิดจักรยาน: {{ bike.type }}</p>
      <p>ขนานจักรยาน: {{ bike.size }}</p>
      <p>ร้านขาย: {{ bike.store }}</p>
      <p>ราคา: {{ bike.price }}</p>
      <p></p>
    </div>
  </div>
</template>
<script>
import BikesService from "@/services/BikesService";
export default {
  data() {
    return {
      bike: {
        type: "",
        size: "",
        store : "",
        price: "",
      }
    };
  },
  methods: {
    async editbike() {
      try {
        await BikesService.put(this.bike);
        this.$router.push({
          name: "bikes"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let bikeId = this.$route.params.bikeId;
      this.bike = (await BikesService.show(bikeId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>