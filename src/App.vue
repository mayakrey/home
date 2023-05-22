<script setup lang="ts">
  import Navigation from './components/Navigation.vue'
  import SocialMedia from './components/SocialMedia.vue'
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
  <div class="social-media-desk">
    <SocialMedia />
  </div>
  <div class="social-media-mobile">
    <SocialMedia />
  </div>
</template>

<style scoped>
  header {
    max-height: 100vh;
  }

  .wrapper {
    margin: 2rem 0;
  }

  .social-media-desk {
    display: none;
  }

  .social-media-mobile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 140px 100px 0 100px;
  }

  .social-media-mobile::before {
    content: " ";
    width: 80%;
    background: var(--font-tertiary);
    position: absolute;
    top: -30px;
    bottom: 72px;
    left: 10%;
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

    .social-media-desk {
      width: 30px;
      position: fixed;
      bottom: 0px;
      left: auto;
      right: 50px;
      text-align: center;
      display: block;
    }

    .social-media-desk:after {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 0px auto;
      background-color: var(--font-tertiary);
    }

    .social-media-mobile {
      display: none;
    }
  }
</style>