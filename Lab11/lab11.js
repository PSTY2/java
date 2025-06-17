// ----------- �������� "�������" -----------
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHi = function () {
  console.log(`�����! � ${this.name}.`);
};

// ----------- �������� "������" -----------
function Dog(name, breed) {
  Animal.call(this, name);   // ��������� ������������ �����������
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} (${this.breed}) ����: ���-���!`);
};

/* ----- ���� ----- */
const rex = new Dog("����", "�������");
rex.sayHi();   // �����! � ����.
rex.bark();    // ���� (�������) ����: ���-���!
