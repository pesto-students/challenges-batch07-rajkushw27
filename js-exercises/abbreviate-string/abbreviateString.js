function abbreviateString(str) {
  const strArray = str.split(' ');

  const firstName = strArray[0].charAt(0).toUpperCase() + strArray[0].slice(1);
  const shortLastName = `${strArray[strArray.length - 1][0]}.`;

  const abbreviateName = `${firstName} ${shortLastName.toUpperCase()}`;
  return abbreviateName;
}

export { abbreviateString };
