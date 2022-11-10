<script setup>
import { ref, watch, onMounted, reactive } from 'vue';
import { debounce, render, utoa, atou } from '../utils';

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const handleRender = debounce(str => {
  preiviewRef.value.innerHTML = render(str);
}, 500);

let str = '';
const mdStr = ref(str);
try {
  str = JSON.parse(atou(location.hash.slice(1)));
  handleRender(str);
} catch (err) {
  console.log(err);
}

mdStr.value = str;

const preiviewRef = ref(null);

watch(
  () => mdStr.value,
  val => {
    handleRender(val);
    history.replaceState({}, '', '#' + utoa(JSON.stringify(val)));
  }
);
</script>

<template>
  <div class="main">
    <div class="editor">
      <textarea
        class="input"
        v-model="mdStr"
        autocomplete="false"
        spellcheck="false"
        @input="handleMDChange"
      ></textarea>
    </div>
    <div ref="preiviewRef" class="preiview"></div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
}
.editor {
  width: 49%;
  box-sizing: border-box;
}
.input {
  font-size: 16px;
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.preiview {
  margin-left: 20px;
  flex: 1;
  height: 100%;
  overflow: auto;
}
</style>
