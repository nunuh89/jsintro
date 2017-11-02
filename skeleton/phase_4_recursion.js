function range(start, end) {
  if (start === end) {
    return [start];
  }

  return range(start,end-1).concat(end);
}

function sumRec(arr) {
  if (arr.length <= 1) {
    return arr[0];
  }
  let smallArr = arr.slice(1);
  return arr[0] + sumRec(smallArr);
}


function exponent(base,exp) {
  if (exp === 0) {
    return 1;
  } else if (exp < 0) {
    return exponent(base,exp+1)/base;
  }

  return base * exponent(base,exp-1);
}

function exponentTwo(base,exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp % 2 === 0) {
    return Math.pow(exponentTwo(base,exp/2),2);
  } else {
    return base * Math.pow(exponentTwo(base,(exp-1)/2),2);
  }
}


function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    let p = fibonacci(n-1);
    let append = [p[p.length-2] + p[p.length-1]];
    return p.concat(append);
  }
}

function bsearch(arr, target) {
  if (arr.length === 1 && arr[0] !== target) {
    return -1;
  }

  let mid = Math.floor(arr.length / 2) ;
  let left = arr.slice(0,mid);
  let right = arr.slice(mid+1);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] >= target) {
    return bsearch(left, target);
  } else {
    return mid + bsearch(right, target)+1;
  }
}

function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2) ;
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);
  let sortedLeft = mergesort(left);
  let sortedRight = mergesort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  do {
    let leftFirst = left[0];
    let rightFirst = right[0];
    if (leftFirst < rightFirst) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  } while (left.length !== 0 && right.length !== 0);
  result = result.concat(left);
  result = result.concat(right);
  return result;
}

function subsets(arr) {

  if (arr.length === 0) {
    return [[]];
  }

  let smallSubsets = subsets(arr.slice(0, arr.length-1));
  let lastEl = arr[arr.length-1];
  let mapping = smallSubsets.map(function(x) { return x.concat([lastEl]);});
  return smallSubsets.concat(mapping);
}
