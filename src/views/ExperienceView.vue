<template>
  <div>
    <h1 class="title">experience</h1>
  </div>
  <div class="line" />
  <div class="columns">
    <div class="hover">
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
        <text x="20" y="20" fill="#da6ca9">2009 - 2015</text>
        <text x="112" y="20" fill="#b8b3b8">Bachelor & Master</text>
        <path d="M 100,100 v -70" stroke="#00B98C" fill="none" stroke-linecap="round" stroke-linejoin="round"
          stroke-width="2" />
      </svg>
      <div class="description">
        <p>Media computer science</p>
        <p>at Berliner Hochschule für Technik</p>
      </div>
    </div>
    <div class="hover">
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
        <text x="20" y="20" fill="#da6ca9">2015 - 2022</text>
        <text x="112" y="20" fill="#b8b3b8">Software Engineer</text>
        <path d="M 100,100 v -70" stroke="#00B98C" fill="none" stroke-linecap="round" stroke-linejoin="round"
          stroke-width="2" />
      </svg>
      <div class="description">
        <p>ImmobilienScout24</p>
        <p>in Berlin</p>
      </div>
    </div>
    <div class="hover">
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
        <text x="20" y="20" fill="#da6ca9">2022 - 2023</text>
        <text x="112" y="20" fill="#b8b3b8">Sabbatical</text>
        <path d="M 100,100 v -70" stroke="#00B98C" fill="none" stroke-linecap="round" stroke-linejoin="round"
          stroke-width="2" />
      </svg>
      <div class="description">
        <p>Traveling around</p>
        <p>North & South America</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .title {
    margin-bottom: 2rem;
  }

  .columns {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }

  .columns div {
    flex: 33.33%;
 /*    font-family: Montserrat, sans-serif; */
  }

  .description {
    color: var(--font-secondary);
    font-style: italic;
    text-align: center;
    margin: 0 0 0 -5rem;
    opacity: 0;
    transition: 0.5s;
  }

  .hover {
    min-height: 10rem;
    cursor: pointer;
  }

  .hover:hover .description {
    opacity: 1;
  }

  svg path {
    stroke-dashoffset: 210;
    stroke-dasharray: 210;
    animation: drawLine 4s forwards;
  }

  svg text {
    opacity: 0;
    animation: fadeIn 3s forwards;
    animation-delay: 1s;
  }

  @keyframes drawLine {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (min-width: 1024px) {
    .title {
      margin-bottom: 6rem;
    }

    .line {
      border: .5px solid var(--font-primary);
      width: 44rem;
      top: 105px;
      margin-left: 4.9rem;
    }

    .columns {
      flex-direction: row;
      align-items: initial;
    }

    .description {
      font-size: 0.9rem;
      margin: 3rem 0 0 -6rem;
    }
  }
</style>