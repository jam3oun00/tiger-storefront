// This page list menus and menu items of selected shop
// Product component, if any, will be called on click

<template>
  <div class="menus">
    <h1>{{ header }}</h1>
    <div v-if="!menus || menus.length === 0">No Menus</div>
    <div v-else>
      <div v-for="menu in menus" :key="menu._id">
        <h2 v-if="menu.status === 'active'">{{ menu.name }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menus',
  data () {
    return {
      header: 'Menu Page'
    }
  },
  computed: {
    menus () {
      return this.$store.state.shopData.menus
    }
  },
  mounted () {
    this.$store.dispatch('getShop')
  }
}
</script>
