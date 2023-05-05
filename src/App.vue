<script setup lang="ts">
  import Home from './components/Home.vue'
  import Navigation from './components/Navigation.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Navigation />
    </div>
  </header>
  <div class="content">
    <Home />
    <RouterView />
  </div>
</template>

<style scoped>
  header {
    max-height: 100vh;
  }

  .content {
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    .content {
      margin-top: 5rem;
      padding: 0 10rem;
    }
  }
</style>