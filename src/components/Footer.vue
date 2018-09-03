<template>
  <div class="footer bg-gray">
    <span class="powered-by white">{{poweredBy}}</span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    poweredBy: String
  }
}
</script>

<style scoped>
.footer {
  height: 40px;
  display: flex;
  justify-content: center;
}
.powered-by {
  font-size: 14px;
  line-height: 40px;
  vertical-align: middle;
}
</style>
