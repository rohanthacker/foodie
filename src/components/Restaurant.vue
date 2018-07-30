<template>
<div class="card">
    <img width="100" :src="model.thumb" alt="">
    <div class="card-content">
        <p><b>{{model.name}}</b></p>
        <small>
        <address>{{model.location.locality}}</address>
        {{model.currency}} {{model.average_cost_for_two}}</p>
        </small>
    </div>
</div>
    <!-- <article>
        <header>
            <div class="back">
                <router-link to='/'>Back</router-link>
            </div>
            <img :src="model.featured_image" alt="">
        </header>
        <section class="content">
            <div class="flex">
                <div class="title">
                    <h1>{{model.name}}</h1>
                    <small>{{model.cuisines}}</small>
                </div>
                <div class="rating">
                    <p>{{model.user_rating.aggregate_rating}}</p>
                    <p>{{model.user_rating.rating_text}}</p>
                </div>
            </div>
            <div class="cost-info">
                <p><span class="case-title">average cost for two</span> : {{model.currency}} {{model.average_cost_for_two}}</p>
            </div>
            <div class="contact-info">
                <address>{{model.location.address}}</address>
                <p>{{model.phone_numbers}}</p>
            </div>
            <div class="deliver-booking-info">
                <p>{{model.has_online_delivery != "0" ? 'has_online_delivery': 'no-has_online_delivery'}}</p>
                <p>{{model.has_table_booking != "0" ? 'has_table_booking': 'no-has_table_booking'}}</p>
                <p>{{model.is_delivering_now != "0" ? 'is_delivering_now': 'no-is_delivering_now'}}</p>
            </div>
        </section>
    </article> -->
</template>

<script>
import fixture from "./fixture.json";
export default {
  props: ["model"]
  //   computed: {
  //     model() {
  //       return fixture.restaurants.find(
  //         rest => rest.restaurant.id === this.$route.params.restaurantID
  //       ).restaurant;
  //     }
  //   }
};
</script>

<style scoped>
.back {
  position: absolute;
  margin: 1rem;
}

.content {
  background-color: #333;
  max-width: 90%;
  margin: 0 auto;
  position: relative;
  top: -2rem;
  border-radius: 0.25rem;
  padding: 1rem;
}
.case-title {
  text-transform: capitalize;
}
h1 {
  font-size: 1.4rem;
}
</style>
