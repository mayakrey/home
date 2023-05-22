<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <div class="home-btn">
      <RouterLink to="/">mk</RouterLink>
    </div>
    <div class="nav-links">
      <RouterLink to="/about">about</RouterLink>
      <RouterLink to="/experience">experience</RouterLink>
      <RouterLink to="/work">work</RouterLink>
      <RouterLink to="/contact">contact</RouterLink>
    </div>
  </nav>
</template>

<style>
  .home-btn a {
    color: var(--color-text);
    font-family: Caveat;
    font-size: 2rem;
    transition: 0.3s ease-out;
    text-decoration: none;
  }

  .home-btn:hover {
    color: #fff;
    text-shadow: 0 0 10px #36e8be, 0 0 20px #36e8be, 0 0 40px #36e8be;
  }

  .home-btn a {
    padding: 0;
  }

  nav {
    width: 100%;
    margin: 1.2rem 0 2.8rem 0;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links a.router-link-exact-active {
    color: var(--font-primary);
  }

  .nav-links a.router-link-exact-active:hover {
    background-color: transparent;
  }

  .nav-links a {
    display: inline-block;
    padding: 0 1rem;
    color: var(--link-primary);
    text-decoration: none;
  }

  .nav-links a:last-child {
    padding: 0 0 0 1rem;
  }


  @media (min-width: 1024px) {
    .home-btn {
      margin-left: 1rem;
    }

    .home-btn a {
      font-size: 4rem;
    }

    nav {
      text-align: left;
      margin: 0 0 0 -1rem;
      font-size: 1rem;
    }
  }
</style>