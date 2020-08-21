function deepEqual(obj1, obj2) {
  return obj1 && obj2 && typeof obj1 === "object" && typeof obj2 === "object"
    ? Object.keys(obj1).length === Object.keys(obj2).length &&
        Object.keys(obj1).reduce(function (isEqual, key) {
          return isEqual && deepEqual(obj1[key], obj2[key]);
        }, true)
    : obj1 === obj2;
}
