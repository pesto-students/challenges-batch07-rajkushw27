const deepCopyObject = objToCopy => {
  if (!objToCopy) return objToCopy;
  if (typeof objToCopy !== 'object') return objToCopy;

  let objectElement = Object.entries(objToCopy);
  objectElement = objectElement.map(([key, value]) => [key, deepCopyObject(value)]);
  const deepCopy = Object.fromEntries(objectElement);
  return deepCopy;
};

export { deepCopyObject };
