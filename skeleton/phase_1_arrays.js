// Array#uniq - returns a new array containing only the unique elements of the original array
// the unique elements should be in the order in which they first appear
// should not mutate the original array
// Array#twoSum - returns an array of position pairs where the elements sum to zero
// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array


Array.prototype.uniq = function () {
  let count = {};
  this.forEach( function(element) {
    if (count[element] === undefined) {
      count[element] = 1;
    } else {
      count[element] += 1;
    }
  });
  let result = [];
  for (var key in count) {
    if (count[key] === 1) {
      result.push(key);
    }
  }
  return result;
};

Array.prototype.twoSum = function () {
  let result = [];
  for (var i = 0; i < this.length; i++){
    for (var j = i+1; j < this.length; j++){
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
};


Array.prototype.transpose = function () {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    let intResult = [];
    for (var j = 0; j < this[0].length;j++){
      intResult.push(this[j][i]);
    }
    result.push(intResult);
  }
  return result;
};

// let array = Array(3).fill().map(() => Array(5).fill(0));
//
