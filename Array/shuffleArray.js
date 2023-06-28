const shuffleArray = (arr) => {
  const shuffle = arr.sort(() => Math.random() - 0.5);

  return shuffle;
};
