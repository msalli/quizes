var Person = function (name, height, age) {
  this.name = name;
  this.height = height;
  this.age = age;
  this.sleeping = false;
};

Person.prototype.sleep = function () {
  if (this.sleeping === false) {
    console.log("Zzzzz....");
    return this.sleeping = true;
  }
};

Person.prototype.wakeUp = function () {
  if (this.sleeping === true) {
    console.log("Rise and shine!");
    return this.sleeping = false;
  }
};

Person.prototype.eat = function () {
  if (this.sleeping === false) {
    return ("nom nom nomz");
  } else {
    return ("Can't eat right now, I'm sleeping.");
  }
};


var Student = function () {
  this.studying = false;
};

Student.prototype = new Person();
Student.prototype.constructor = Student;


Student.prototype.sleep = function () {
  if (this.studying === false) {
    return this.sleeping = true;
  } else {
    return ("Can't sleep now! I'm studying");
  }
};

Student.prototype.study = function () {
  if (this.sleeping === false) {
    return this.studying = true;
  }
};

Student.prototype.stopStudy = function () {
  if (this.studying === true) {
    return this.studying = false;
  }
};
