<script setup>
import { ref } from 'vue';
import { utoa, atou } from '../utils';
import { Editor, Viewer } from './bytemd';

const mdStr = ref('');
const preview = ref(false);

const viewKey = '__VIEW__';

parseUrl();

function parseUrl() {
  try {
    let url = location.hash.slice(1);
    if (!url) return;
    if (url.startsWith(viewKey)) {
      preview.value = true;
      url = url.slice(viewKey.length);
    }
    const str = atou(url);
    mdStr.value = str;
  } catch (err) {
    console.warn(err);
  }
}

function handleChange(val) {
  mdStr.value = val;
  history.replaceState({}, '', '#' + utoa(val));
}
</script>

<template>
  <div v-if="preview" class="view-body">
    <Viewer class="viewer" :value="mdStr" />
  </div>
  <div v-else class="edit-body">
    <Editor :value="mdStr" mode="auto" @change="handleChange" />
  </div>
</template>

<style>
.edit-body {
  background: #fff;
  height: 100%;
}
.view-body {
  background: #f2f3f5;
  height: 100%;
  overflow: auto;
}
.viewer {
  max-width: 820px;
  margin: auto;
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
}
</style>
