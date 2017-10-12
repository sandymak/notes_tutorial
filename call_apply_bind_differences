var obj = {num : 2}

function addToThis (a, b, c) {
  return this.num + a + b + c;
}

console.log('.call()', addToThis.call(obj, 1, 2, 3))

// 1) function addToThis is called on for obj
// 2) within addToThis() this = obj ; this.num = obj.num
// 3) this.num + a + b + c = obj.num(2) + 1 + 2 + 3
// 4) log out 8

var arr = [2,3,4]

console.log('.apply()', addToThis.apply(obj, arr))

// 1) funciton addToThis is called on for obj
// 2) within addToThis(), this = obj ; this.num = obj.num
// 3) DIFFERENCE btw .call & .apply() is, .apply() allows you to pass in arr as arg
// 4) this.num + arr = obj.num(2) + arr (2+3+4)
// 5) log out 11


var bound = addToThis.bind(obj);
console.log('bound', bound(1,2,3));
console.log('bound.apply' , bound.apply(null, arr));

// 1) addToThis is bind to obj; default obj addToThis will reference is obj
// 2) var bound is now a function we can use by passing arguments in normally
// 3) if you want to pass in an array, you will need to use .apply() on bound
  // a) trick here is to use 'null' as a placeholder to prevent breaking the bind between obj and addToThis()
// 'bound' logs out 8
// 'bound.apply' logs out 11

obj.num = 4;

console.log(bound(2, 0, 0))

// if you change obj.num, the bounded obj to addToThis is also changed



