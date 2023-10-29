// Array and Object Functions
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (element) => {
      result.push(callback(element));
    });
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    myEach(collection, (element) => {
      acc = callback(acc, element);
    });
    return acc;
  }
  
  function myFind(collection, predicate) {
    let result;
    myEach(collection, (element) => {
      if (predicate(element) && !result) {
        result = element;
      }
    });
    return result;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (element) => {
      if (predicate(element)) {
        result.push(element);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(Math.max(array.length - n, 0));
  }