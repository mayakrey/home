<template>
  <h1 class="title">about me</h1>
  <div class="columns">
    <div class="wrapper-line">
      <p>G'day, my name is Maya and I enjoy writing JavaScript code.</p>
      <p>I spent 8 years at a German real estate company called ImmoScout24.
        I had the privelage to learn a lot during those years, starting as a working student doing frontend, then
        being hired as a full stack engineer writing infrastructure as code, creating frontends and backends.</p>
      <p>Working in different teams and with various technologies has helped me grow as a person and an engineer.
        While I enjoyed getting to know multiple languages, JavaScript has remained my passion since the start.
        This includes mainly React and NodeJS.</p>
    </div>
    <div>
      <div class="image-border">
      <img src="../../src/assets/profile_img.jpg" />
    </div>
    </div>
  </div>
</template>

<style scoped>
  .columns {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .columns p {
    margin-bottom: 1rem;
  }

  .image-border {
    position: relative;
  }

  .image-border:after {
    content: "";
    display: block;
    position: absolute;
    border: 1px solid var(--link-primary);
    border-radius: 13px;
    width: 225px;
    height: 300px;
    top: 10px;
    left: 10px;
    z-index: 1;
  }

  img {
    height: 300px;
    border-radius: 13px;
    z-index: 99;
  }

  @media (min-width: 1024px) {
    .columns {
      flex-direction: row;
      gap: 5rem;
    }
  }

  .columns div {
    flex: 50%;
  }
</style>