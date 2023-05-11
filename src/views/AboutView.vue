<template>
  <div class="about">
    <h1 class="title">about me</h1>
  </div>
</template>

<style>
  .title {
    margin-bottom: 1rem;
  }

  .title::after {
    content: "";
    display: block;
    position: relative;
    top: -8px;
    width: 175px;
    height: 0.1px;
    margin-left: 0.2px;
    background-color: var(--link-primary);
  }

  @media (min-width: 1024px) {
    .title {
      margin-bottom: 2rem;
    }
  }
</style>