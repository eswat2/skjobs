<template>
  <div id="app">
    <JobsList />
    <Footer poweredBy="Powered by Lever"/>
  </div>
</template>

<script>
import JobsList from './components/JobsList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    JobsList,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
