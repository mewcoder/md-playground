// import { saveAs } from 'file-saver';

export async function downloadProject(store) {
  if (!confirm('Download project files?')) {
    return;
  }

  // const { default: JSZip } = await import('jszip');
  // const zip = new JSZip();

  // // basic structure
  // zip.file('index.html', index);
  // zip.file('package.json', pkg);
  // zip.file('vite.config.js', config);
  // zip.file('README.md', readme);

  // // project src
  // const src = zip.folder('src');
  // src.file('main.js', main);

  // const files = store.getFiles();
  // for (const file in files) {
  //   src.file(file, files[file]);
  // }

  // const blob = await zip.generateAsync({ type: 'blob' });
  // saveAs(blob, 'vue-project.zip');
}
