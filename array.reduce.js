// This is example code showcasing how array.reduce works


var list = [5, 10, 5, 10 , 5 , 10];

function adder(arr) {
  return arr.reduce(function(total, eachVal) {
    return eachVal + total;
  }, 100);
}

// How does reduce work in 'if/else' situations???

function subtractor(arr) {
  return arr.reduce(function(total, eachVal) {
    if (eachVal === 5) {
      console.log(eachVal);
      return eachVal;
    }

    return eachVal + total;
  }, 0)
}

adder(list);
subtractor(list);


// Write array.filter() using arr.reduce

function myFilter (arr, filterFunc) {
  return arr.reduce(function(filtered, element) {
    if (filterFunc(element)) {
      filtered.push(element);
    }
    // console.log(filtered)
    return filtered;
  }, []);
}


var filteredArray = myFilter([1,2,3,4,5,6], function(elem) {
  return elem%2 === 0;
});

filteredArray;