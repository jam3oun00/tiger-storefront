<template>
  <div class="your-Cart">
    <div class="cart-summary">
      <div><router-link to="/"><img class="cross-icon" src="../assets/images/cross-icon.png"></router-link></div>
      <br>
      <p><span class="delivery">Delivery </span><span><img class="toggle" src="../assets/images/toggle.png" /></span><span class="pickup"> pickup</span></p>
      <div><img src="../assets/images/time-move-icon.png"><span class="time">20 min</span></div>
      <h3 class="cart-summary-header-title">Your order from Ngan Lung Restaurant (Tsim Sha Tsui)</h3>
      <div v-for="product in cart" :key="product">
        {{product}}
          <div class="gap"><p style="color: white">.</p></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  components: {
  }
}
</script>

<style scoped>
.cart-summary{
  padding: 5px;
}
.cross-icon{
  float: left;
}
.delivery, .pickup, .time{
  color: rgb(116, 116, 116);
}
.time{
  position: relative;
  top: -7px;
}
.cart-summary-header-title{
  font-size: 17px;
  font-weight: 700;
  color: rgb(68, 68, 68);
  text-align: center;
  line-height: 1.5;
}
</style>
