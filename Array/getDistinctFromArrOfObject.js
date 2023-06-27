const getDistinctFromArrOfObject = (arr, key) => {
  const pairsArray = arr.map((i) => [i[key], i]);

  const uniqueArray = new Map(pairsArray);

  const result = [...uniqueArray.values()];

  return result;
};
