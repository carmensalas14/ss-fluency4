//1. Given a class `Animal`, create two classes `Cat` and `Dog` than inherit from it.

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and ${this.status}.`;
  }
}

//Cat constructor should take 3 arguments, name, age and status. Cats should always have leg count of 4 and a species of cat. Also, the introduce method should be identical to the original except, after the phrase there should be a single space and words Meow meow!
//Dog constructor should take 4 arguments, name, age, status, and master. Dogs should always have leg count of 4 and a species of dog. Dogs have identical introduce method as any other animal, but they have their own method called greetMaster, which accepts no arguments and returns Hello (master's name)! Woof, woof!

//2. Create a class, `Person`, that takes in a name, occupation, age, and interest.

//3. Implement in your `Person` class a method that inroduces themselves, introduce(), and a method that puts them to work on their occupation, work(). It should specify what job they are doing!

//4. Create two new classes, `Programmer` and `Surgeon`, that implement their name, age, and interest.

//5. Implement two methods of your choice for each class! It should be something relatable, however. For example, you could implement a hobby() method that has them work on their interests.
