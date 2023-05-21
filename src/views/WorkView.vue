<template>
  <h1 class="title">work</h1>
  <div class="text-wrapper columns">
    <div>
      <p>I gained most of my experience working for ImmoScout24.</p>
      <p>These are a few of the projects I've had the pleasure to work on during that time:</p>
      <div class="grid">
        <div>
        <p>Data project with real time visualisation</p>
          <ul>
            <li>Elasticsearch</li>
            <li>S3</li>
            <li>Data Pipelines</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Charts</li>
          </ul>
        </div>
        <div>
        <p>Product reporting tool for the sales team</p>
          <ul>
            <li>S3</li>
            <li>Data Pipelines</li>
            <li>ReactJS</li>
            <li>TypeScript</li>
            <li>Charts</li>
          </ul>
        </div>
        <div>
        <p>Expose websites for developer projects</p>
        <ul>
          <li>Elasticsearch</li>
          <li>ReactJS</li>
          <li>Java</li>
          <li>MySQL</li>
        </ul>
      </div>
        <div>
        <p>Search for developer projects</p>
        <ul>
          <li>Elasticsearch</li>
          <li>ReactJS</li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .grid {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 3rem;
  }

  .grid div {
    flex: 1;
    width: 100%; 
    background-color: var(--background-secondary);
    padding: 1rem;
    border-radius: 5px;
  }

  .grid p {
    margin-bottom: .5rem;
    font-weight: bold;
  }

  ul li {
    list-style: none;
  }

  ul li {
    color: var(--font-tertiary);
  }

  ul li:before {
  content: '⇾';
  color: var(--font-primary);
  padding-right: 5px;
}

@media (min-width: 1024px) {
  .grid {
    flex-direction: row;
  }

  .grid div {
    flex: 1 1 30%;
  }
}
</style>