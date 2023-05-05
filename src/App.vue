<script setup lang="ts">
  import Home from './components/Home.vue'
  import Navigation from './components/Navigation.vue'
</script>

<template>
  <header>
    <Navigation />
  </header>
  <div class="wrapper">
    <Home />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  header {
    max-height: 100vh;
  }

  .wrapper {
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    .wrapper {
      margin-top: 5rem;
      padding: 0 10rem;
    }

    .content {
      margin-top: 3rem;
      font-size: 1rem;
      font-weight: 100;
    }
  }
</style>