const deepCopyObject = objToCopy => {
  const deepCopy = {};
  for (const obj in objToCopy) {
    if (typeof (objToCopy[obj]) === 'object' && objToCopy[obj] != null) {
      deepCopy[obj] = deepCopyObject(deepCopy[obj]);
    } else deepCopy[obj] = objToCopy[obj];
  }
  return deepCopy;
};

export { deepCopyObject };
