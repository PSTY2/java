// ----------- Прототип "Тварина" -----------
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHi = function () {
  console.log(`Привіт! Я ${this.name}.`);
};

// ----------- Наслідуємо "Собака" -----------
function Dog(name, breed) {
  Animal.call(this, name);   // викликаємо “батьківський” конструктор
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} (${this.breed}) каже: Гав-гав!`);
};

/* ----- Демо ----- */
const rex = new Dog("Рекс", "вівчарка");
rex.sayHi();   // Привіт! Я Рекс.
rex.bark();    // Рекс (вівчарка) каже: Гав-гав!
