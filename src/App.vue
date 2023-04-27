<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
      <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 97vh;
  margin-top: 3vh;
}

</style>
