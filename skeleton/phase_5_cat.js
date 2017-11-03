const Cat = function (name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function cuteStatement() {
  // return this.owner + ' loves ' + this.name;
  return `${this.owner} loves ${this.name}`;
};
//
// Cat.prototype.meow = function meow() {
//   return "meow";
// };

let testCat = new Cat("Snickers", "Bob");
let cuteCat = new Cat("Poopface","Poopy");

testCat.meow = function() {
  return "meow";
};
