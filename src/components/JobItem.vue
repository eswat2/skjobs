<template>
  <div class="job">
    <div class="row navy">
      <i class="fas fa-angle-right job-icon"></i>
      <span>{{job.title}}</span>
    </div>
    <div class="row categories gray">
      <span class="category commitment">{{job.commitment}}</span>
      <span class="category team">{{job.team}}</span>
      <span class="category location">{{job.location}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobItem',
  props: {
    job: Object
  }
}
</script>

<style scoped>
.job {
  display: flex;
  flex-direction: column;
  font-size: 24px;
  line-height: 28px;
  vertical-align: middle;
  margin-bottom: 30px;
}
.row {
  display: flex;
  flex-direction: row;
}
.job-icon {
  margin-right: 10px;
}
.category {
  margin-right: 14px;
  font-weight: bold;
}
.categories {
  font-size: 14px;
  margin-top: 14px;
  margin-left: 24px;
}
</style>
