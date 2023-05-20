<script setup lang="ts">
  import Navigation from './components/Navigation.vue'
</script>

<template>
  <header>
    <Navigation />
  </header>
  <div class="wrapper">
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
    margin: 2rem 0;
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