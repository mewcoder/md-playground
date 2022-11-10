<script setup>
import Header from './components/header.vue';
import Repl from './components/repl.vue';

const setVH = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight + `px`);
};
window.addEventListener('resize', setVH);
setVH();
</script>

<template>
  <Header />
  <Repl class="repl" msg="You did it!" />
</template>

<style>
.dark {
  color-scheme: dark;
}
body {
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  --base: #444;
  --nav-height: 50px;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  background-color: transparent;
}

.repl {
  height: calc(var(--vh) - var(--nav-height));
}
</style>
