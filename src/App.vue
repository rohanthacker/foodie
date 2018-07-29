<template>
  <article id="app">
    <section>
      <router-view/>
    </section>
  </article>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  margin: 0;
  background-color: #222;
  color: white;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: white;
}

.card {
  margin: 0.5rem;
  background-color: #333;
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
}
</style>
