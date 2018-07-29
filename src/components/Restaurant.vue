<template>
    <article>
        <header>
            <router-link to='/'>Back</router-link>
            <img :src="model.featured_image" alt="">
        </header>
        <section>
            <h1>{{model.name}}</h1>
            <p>{{model.cuisines}}</p>
            <p>{{model.phone_numbers}}</p>
            <p>{{model.has_online_delivery != "0" ? 'has_online_delivery': 'no-has_online_delivery'}}</p>
            <p>{{model.has_table_booking != "0" ? 'has_table_booking': 'no-has_table_booking'}}</p>
            <p>{{model.is_delivering_now != "0" ? 'is_delivering_now': 'no-is_delivering_now'}}</p>
            <p>{{model.currency}} {{model.average_cost_for_two}}</p>
            <p>{{model.price_range}}</p>
            <p>{{model.location}}</p>
            <p>{{model.user_rating.aggregate_rating}} = {{model.user_rating.rating_text}}</p>
        </section>
    </article>
</template>

<script>
import fixture from "./fixture.json";
export default {
  computed: {
    model() {
      return fixture.restaurants.find(
        rest => rest.restaurant.id === this.$route.params.restaurantID
      ).restaurant;
    }
  }
};
</script>

<style scoped>
</style>
