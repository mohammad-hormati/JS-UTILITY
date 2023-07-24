const groupBy = (arr, key) => {
  const newObj = arr.reduce(function (acc, currentValue) {
    if (!acc[currentValue[key]]) {
      acc[currentValue[key]] = [];
    }
    acc[currentValue[key]].push(currentValue);
    return acc;
  }, {});
  return newObj;
};
