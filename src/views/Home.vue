<template>
  <div>
    <!--TOP NAVBAR -->
      <navbar />
    <landing-page />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '../components/landingPage.vue'
import navbar from '../components/navbar.vue'
export default {
  name: 'Home',
  components: {
    LandingPage,
    navbar
  }
}
</script>
