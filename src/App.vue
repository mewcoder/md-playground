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
  <Repl class="repl" />
</template>

<style>
body {
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
