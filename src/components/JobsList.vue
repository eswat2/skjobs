<template>
  <div class="wrapper">
    <div class="jobs">
      <JobItem v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script>
import JobItem from './JobItem.vue'

export default {
  name: 'JobsList',
  components: {
    JobItem
  },
  props: {
    jobs: Array
  }
}
</script>

<style scoped>
.wrapper {
  padding-top: 60px;
  height: calc(100% - 100px);
  overflow: auto;
}
.jobs {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}
</style>
