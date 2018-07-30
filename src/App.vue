<template>
  <article id="app">
    <section>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </section>
  </article>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
