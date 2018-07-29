<template>
  <div>
    <div v-for="(value,key, index) in fixture.best_rated_restaurant">
      <img height="100" width="100" :src="value.restaurant.featured_image" alt="">
      {{value.restaurant.name}}
    </div>
  </div>
</template>

<script>
import fixture from "./fixture.json";
export default {
  name: "HelloWorld",
  // mounted() {
  //   fetch(
  //     "https://developers.zomato.com/api/v2.1/location_details?entity_id=4&entity_type=city",
  //     {
  //       mode: "cors",
  //       headers: { "user-key": "dce975e6a6a7787e71f6aed186b4407c" }
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(r => (this.data = r));
  // },
  data() {
    return {
      fixture
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
