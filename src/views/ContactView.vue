<template>
  <h1 class="title">contact</h1>
  <div class="text-wrapper">
    <p>I’m currently looking for job opportunities, preferably in the JavaScript world.</p>
    <p>If you are looking for a passionate team player, send me a message via e-mail or on LinkedIn.</p>
    <p>I’ll be happy to have a chat.</p>
  </div>
</template>

<style scoped>
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