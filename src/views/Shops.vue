// This page list shops near the user location
// If no user location provided, show some default shops

<template>
  <div class="shops">
    <h1>{{ header }}</h1>
    <div v-if="!shops || shops.length === 0">No Shops</div>
    <div v-else>
      <div v-for="shop in shops" :key="shop.name">
        {{ shop.name }}
        {{ shop.info.latlong }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Shops',
  data () {
    return {
      header: 'Shop Page'
    }
  },
  computed: {
    shops () {
      return this.$store.state.shops
    }
  },
  mounted () {
    this.$store.dispatch('getShops')
  }
}
</script>
