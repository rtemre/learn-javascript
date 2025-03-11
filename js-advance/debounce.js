function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId); // Cancel the last call
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const search = (query) => {
  console.log("serachig for ", query);
};

const searchWithDebounce = debounce(search, 3000);

searchWithDebounce("JS");
searchWithDebounce("JA");
searchWithDebounce("JAV");
searchWithDebounce("JAVA");
searchWithDebounce("JAVAS");
searchWithDebounce("JAVASC");
searchWithDebounce("JAVASCR");
searchWithDebounce("JAVASCRI");
searchWithDebounce("JAVASCRIP");
searchWithDebounce("JAVASCRIPT");
