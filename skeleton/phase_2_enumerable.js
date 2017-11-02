Array.prototype.myEach = function(cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

// a.myEach(function(el) {
//   console.log(el);
// })


Array.prototype.myMap = function(cb) {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

// a.myMap(function(el) {
//   return el+1;
// })

Array.prototype.myReduce = function(cb, initialValue) {
  if (initialValue === undefined) {
    var i = 1;
  } else {
    var i = 0;
  }
  let acc = initialValue || this[0];

  for (i; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }

  return acc;
};

// without initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }); // => 6
//
// // with initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25); // => 31
