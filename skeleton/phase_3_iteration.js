Array.prototype.bubbleSort = function(){
  var swapped = false;

  do {
    swapped = false;
    for (var i = 0; i < this.length-1; i++) {
      if (this[i]>this[i+1]) {
        var temp = this[i];
        this[i]  = this[i+1];
        this[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return this;
};


String.prototype.substrings = function(){
  let result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i+1; j < this.length+1; j++) {
      result.push(this.slice(i,j));
    }
  }
  return result;
};
