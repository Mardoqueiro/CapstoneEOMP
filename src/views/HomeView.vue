<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Welcome to our store</h2>
    </div>
    <div class="row">
      <h4 class="display-4">Recent cars</h4>
    </div>
    <div class="row gap-2 justify-content-center" v-if="recentCars">
      <Card v-for="car in recentCars" :key="car.carID">
        <template #cardHeader>
          {{ car.imageUrl }}
          <img :src="car.imageUrl" loading="lazy" class="img-fluid" :alt="car.carName">
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ car.carName }}</h5>
          <p class="lead">{{ car.prodDescription }}</p>
          <p class="lead"><span class="text-success fw-bold">Price</span>: R{{ car.price }}</p>
        </template>
      </Card>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
export default {
  name: 'HomeView',
  components: {
    Card,
    Spinner
  },
  computed: {
    recentCars() {
      return this.$store.state.recentCars
    }
  },
  mounted() {
    this.$store.dispatch('fetchCars')
  }
}
</script>