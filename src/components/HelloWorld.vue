<template>
  <div>
    <div class="card" v-for="(value,key, index) in fixture.restaurants">
      <img height="100" width="100" :src="value.restaurant.thumb" alt="">
      <div class="card-content">
        <router-link :to="`/restaurant/${value.restaurant.id}`">
          <h1>{{value.restaurant.name}}</h1>
          <p>{{value.restaurant.location.locality}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import fixture from "./fixture.json";
export default {
  name: "Index",
  data() {
    return {
      fixture
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-content {
  padding: 0.5rem;
}
</style>
