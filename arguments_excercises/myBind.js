Function.prototype.myBind = function (context, ...bindArgs) {
  let that = this;
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

console.log(markov.says("meow", "Ned"));
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
console.log(markov.says.myBind(breakfast, "meow", "Kush")());
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
console.log(markov.says.myBind(breakfast)("meow", "a tree"));
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
console.log(markov.says.myBind(breakfast, "meow")("Markov"));
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
console.log(notMarkovSays("meow", "me"));
// Breakfast says meow to me!
// true