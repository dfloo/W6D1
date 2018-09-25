Function.prototype.myCurry = function(numArgs) {
  let args = [];
  let that = this;
  return function _myCurry(num){
    args.push(num);
    if (args.length === numArgs) {
      return that.apply(that, args);
    } else {
      return _myCurry;
    }
  };
};

Function.prototype.myCurry2 = function(numArgs) {
  let args = [];
  let that = this;
  return function _myCurry2(num){
    args.push(num);
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _myCurry2;
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.myCurry2(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
console.log(f1 = f1(6)); // = 30

// or more briefly:
console.log(sumThree.myCurry2(3)(4)(20)(6));