let timer;
const debounce = function (fn, d) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(fn, d);
};
export default debounce;
