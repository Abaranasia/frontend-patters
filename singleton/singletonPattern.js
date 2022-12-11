class Singleton {
  constructor() {
    console.log('Entering constructor...');
    this.random = Math.random();

    if (Singleton.instance) {
      console.log('Object already exists');
      return Singleton.instance; // If it already exists, return the same object
    }
    console.log(`Object didn't exists and its created`);
    Singleton.instance = this; // Else create it
  }
}

const singleton = new Singleton(); // It creates the instance
console.log('singleton.random', singleton.random);

const singleton2 = new Singleton(); // It doesn't create the instance because it already existed
console.log('singleton2.random', singleton2.random);

console.log(singleton.random === singleton2.random); // true if both objects have the same random attribute
