const moveElToFirst = (arr, el) => {
  const findIndexEl = arr.findIndex((i) => i === el);

  // remove el from array
  arr.splice(findIndexEl, 1);

  // pass el to first of array
  arr.unshift(el);

  return arr;
};
