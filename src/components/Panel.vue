<template>
  <div class="panel">
    <span>{{ text }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Panel',
    props: ["text"]
  }
</script>

<style scoped>
  .panel {
    background: #eef;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
  }
</style>
