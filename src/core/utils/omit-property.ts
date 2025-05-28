const omitProperty = <T extends object, K extends keyof T>(
  obj: T,
  keysToRemove: K[]
): Omit<T, K> => {
  const newObj = { ...obj };
  for (const key of keysToRemove) {
    delete newObj[key];
  }
  return newObj;
};

export default omitProperty;
