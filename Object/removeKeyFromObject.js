const removeKeyFromObject = (key, obj) => {
  const { [key]: omitted, ...res } = obj;

  return res;
};
