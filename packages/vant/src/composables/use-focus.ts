import focusable from 'vue-tv-focusable';

const w: any = window;
export function useFocus() {
  if (w.app) {
    w.app.use(focusable);
    w.app.config.globalProperties.$tv.init({
      KEYS: {
        KEY_LEFT: [37], // ←
        KEY_UP: [38], // ↑
        KEY_RIGHT: [39], // →
        KEY_DOWN: [40], // ↓
        KEY_ENTER: [83, 13], // 83: s键  13：enter键
      },
      focusClassName: 'ftv-focus',
      offsetDistance: 50,
      longPressTime: 500,
    });
    console.log(w.app, 'w.app');
  }
}
// export const useFocus = {
//   install(app: any) {
//     app.use(focusable);
//     app.config.globalProperties.$tv.init({
//       KEYS: {
//         KEY_LEFT: [37], // ←
//         KEY_UP: [38], // ↑
//         KEY_RIGHT: [39], // →
//         KEY_DOWN: [40], // ↓
//         KEY_ENTER: [83, 13], // 83: s键  13：enter键
//       },
//       focusClassName: 'ftv-focus',
//       offsetDistance: 50,
//       longPressTime: 500,
//     });
//   },
// };
