<template>
  <div id="app">
    <JobsList :jobs='jobs' />
    <Footer :poweredBy='poweredBy' />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import JobsList from './components/JobsList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    JobsList,
    Footer
  },
  computed: mapState({
    jobs: state => state.jobs,
  }),
  data() {
    return {
      poweredBy: 'Jobs powered by LEVER'
    }
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
