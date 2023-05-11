<script setup lang="ts">
  import Home from '../components/Home.vue'
</script>

<template>
  <Home />
  <div class="text-wrapper wrapper-line">
    <p>
      I’m a software engineer from Berlin with a passion
      and good eye for design and usability.
    </p>
    <p>
      After having gained years of experience creating a wide variety of products including frontends, backends and
      infrastructure as code, I decided to broaden my horizon by traveling around Latin America for a year.
    </p>
    <p>
      Now I’m back and ready for new coding challenges. Preferably in the JavaScript world.
    </p>
  </div>
</template>

<style scoped>
  .wrapper-line::before {
    content: " ";
    width: 0.1px;
    background: var(--link-primary);
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: -30px;
  }
</style>