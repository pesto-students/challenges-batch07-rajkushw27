function chunkArrayInGroups(array, chunkSize) {
  return array.reduce((twoDArray, value, index) => {
    if (index % chunkSize === 0) twoDArray.push(array.slice(index, index + chunkSize));
    return twoDArray;
  }, []);
}

export {
  chunkArrayInGroups,
};
