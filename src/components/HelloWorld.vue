<template>
  <article v-if="!isLoading">
    <header :class="headerClassNames">
      <div class="flex">
        <div class="title">
          <h1>{{isFilterOpen ? 'Refine' : model.location.title}}</h1>
        </div>
        <div>
          <p><font-awesome-icon @click="isFilterOpen = !isFilterOpen" :icon="isFilterOpen ? 'times' : 'filter'" /></p>
        </div>
      </div>
      <div class="display-wrapper">
      <div class="content">
        <section class="filter-section">
          <p><small><em>Sort By</em></small></p>
          <button @click="sortBy('name')" >Name</button>
          <button @click="sortBy('avarage_cost_for_two')" >Cost</button>
        </section>
        <section class="filter-section">
          <p><small><em>Maximum Avarage Price For 2</em></small></p>
          <input @input="filterBy" v-model="filterModel.avgPrice" min="0" max="3000" type="range">
        </section>
        <section class="filter-section">
          <p><small><em>Cusine</em></small></p>
          <button v-for="cuisine in model.popularity.top_cuisines">{{cuisine}}</button>
        </section>
      </div>
      <div class="footer">
        <button @click="isFilterOpen = !isFilterOpen" class="expand">Reset</button>
        <button @click="isFilterOpen = !isFilterOpen" class="expand is-primary">Apply</button>
      </div>
      </div>
    </header>
    <section v-if="model.nearby_restaurants.length" >
      <Restaurant v-for="(value,key, index) in model.nearby_restaurants" :model="value.restaurant" />
    </section>
      <section v-else>
        <div>
          <h1><font-awesome-icon icon="times" /> No Items</h1>
        </div>
      </section>
  </article>
  <ActivityIndicator v-else />
</template>

<script>
import fixture from "./fixture.json";
export default {
  name: "Index",
  created() {
    this.getPosition();
  },
  data() {
    return {
      model: fixture,
      isLoading: false,
      isFilterOpen: true,
      filterModel: {
        avgPrice: 0
      },
      position: {
        lat: 0,
        lng: 0
      }
    };
  },
  methods: {
    getPosition() {
      this.isLoading = true;
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      var vm = this;
      function success(pos) {
        var crd = pos.coords;
        vm.position.lat = crd.latitude;
        vm.position.lng = crd.longitude;
        vm.isLoading = false;
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    },
    filterBy() {
      this.model.nearby_restaurants = this.model.nearby_restaurants.filter(
        item =>
          item.restaurant.average_cost_for_two <
          parseInt(this.filterModel.avgPrice)
      );
    },
    sortBy(key) {
      this.model.nearby_restaurants = this.model.nearby_restaurants.sort(
        (a, b) => {
          return (
            a.restaurant.average_cost_for_two -
            b.restaurant.average_cost_for_two
          );
        }
      );
    }
  },
  computed: {
    headerClassNames() {
      return {
        header: true,
        "is-expanded": this.isFilterOpen
      };
    }
  }
};
</script>
//   model: {
//     get() {
//       return this.fixture.nearby_restaurants.sort((a, b) => {
//         if (a.restaurant.name < b.restaurant.name) {
//           return -1;
//         } else if (a.restaurant.name > b.restaurant.name) {
//           return 1;
//         } else {
//           return 0;
//         }
//       });
//     },
//     set(value) {
//       console.log(value);
//       return value;
//     }
//   }

