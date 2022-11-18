<template>
  <div ref="el" class="md-editer"></div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from 'vue';
import { Editor } from 'bytemd';

export default defineComponent({
  props: {
    value: String,
    plugins: Array,
    sanitize: Object,
    remarkRehype: Object,
    mode: String,
    previewDebounce: Number,
    placeholder: String,
    editorConfig: Object,
    locale: Object,
    uploadImages: Function,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const el = ref(null);
    const editorRef = ref(null);

    watch(
      () => props,
      newValue => {
        const copy = { ...newValue };
        for (let k in copy) {
          if (copy[k] === undefined) {
            delete copy[k];
          }
        }
        editorRef.value.$set(copy);
      },
      { deep: true }
    );

    onMounted(() => {
      const editor = new Editor({
        target: el.value,
        props,
      });
      editor.$on('change', e => {
        emit('change', e.detail.value);
      });
      editorRef.value = editor;
    });

    return { el };
  },
});
</script>

<style>
.md-editer {
  height: 100%;
}
.bytemd {
  height: 100% !important;
}
</style>
