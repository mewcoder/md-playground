import { zlibSync, unzlibSync, strToU8, strFromU8 } from 'fflate';
// import MarkdownIt from 'markdown-it';
// import hljs from 'highlight.js';

export function debounce(fn, n = 100) {
  let handle;
  return (...args) => {
    if (handle) clearTimeout(handle);
    handle = setTimeout(() => {
      fn(...args);
    }, n);
  };
}

export function utoa(data) {
  const buffer = strToU8(data);
  const zipped = zlibSync(buffer, { level: 9 });
  const binary = strFromU8(zipped, true);
  return btoa(binary);
}

export function atou(base64) {
  const binary = atob(base64);

  // zlib header (x78), level 9 (xDA)
  if (binary.startsWith('\x78\xDA')) {
    const buffer = strToU8(binary, true);
    const unzipped = unzlibSync(buffer);
    return strFromU8(unzipped);
  }

  // old unicode hacks for backward compatibility
  // https://base64.guru/developers/javascript/examples/unicode-strings
  return decodeURIComponent(escape(binary));
}

// export function render(str) {
//   const md = new MarkdownIt({
//     html: true,
//     xhtmlOut: true,
//     breaks: true,
//     langPrefix: 'lang-',
//     highlight(str, lang) {
//       let code = '';
//       if (lang && hljs.getLanguage(lang)) {
//         try {
//           code = `<code class="hljs">${
//             hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
//           }</code>`;
//         } catch (error) {
//           code = `<pre class="hljs"><code>${md.utils.escapeHtml(
//             str
//           )}</code></pre>`;
//         }
//       }
//       return code;
//     },
//   });
//   return md.render(str);
// }
