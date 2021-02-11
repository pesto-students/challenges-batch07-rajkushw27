function abbreviateString(str) {
  const strArray = str.split(' ');

  let outputArray = strArray[0].charAt(0).toUpperCase() + strArray[0].slice(1);

  const endName = strArray[strArray.length - 1];

  const shortEndName = `${endName[0]}.`;

  outputArray = `${outputArray} ${shortEndName.toUpperCase()}`;
  return outputArray;
}

export { abbreviateString };
