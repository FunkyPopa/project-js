// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [];

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let u1 = new User(2, 'vasya', 'pupkin', 'fhdsagjsf@gmail.com', '0935638432');
let u2 = new User(3, 'petya', 'stus', 'fhf342f@gmail.com', '0685654532');
let u3 = new User(1, 'olya', 'ruda', 'fhhlqddsf@gmail.com', '0995543432');
let u4 = new User(5, 'oleg', 'bober', 'fhfdjsf@gmail.com', '09356545332');
let u5 = new User(4, 'max', 'hupl', 'fhQQjsf@gmail.com', '06656354332');
let u6 = new User(10, 'nastya', 'nya', 'fdsgfdjsf@gmail.com', '0995638543');
let u7 = new User(7, 'tanya', 'pug', 'fhffdsjf@gmail.com', '0995639732');
let u8 = new User(8, 'sergiy', 'buda', 'fjjfdsjsf@gmail.com', '0995638432');
let u9 = new User(9, 'volodya', 'savik', 'fsoifsjsf@gmail.com', '0675624432');
let u10 = new User(6, 'galuna', 'hupl', 'jdyassf@gmail.com', '0505638532');


let usersPush = (u) => {
    users.push(u)
}

usersPush(u1);
usersPush(u2);
usersPush(u3);
usersPush(u4);
usersPush(u5);
usersPush(u6);
usersPush(u7);
usersPush(u8);
usersPush(u9);
usersPush(u10);

console.log(users);

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

let filteredUsers = users.filter(value => value.id % 2 === 0);

console.log(filteredUsers);

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let users2 = [...users] //створив спеціально щоб перші юзери не мінялися

let sortedUsers = users2.sort(function (a, b) {
    return a.id - b.id;
});

console.log(sortedUsers);

// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [];

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let cl1 = new Client(2, 'vasya', 'pupkin', 'fhdsagjsf@gmail.com', '0935638432', ['pencil', 'paper', 'pen']);
let cl2 = new Client(3, 'petya', 'stus', 'fhf342f@gmail.com', '0685654532', ['orange', 'banana']);
let cl3 = new Client(1, 'olya', 'ruda', 'fhhlqddsf@gmail.com', '0995543432', ['brush', 'paint', 'paper']);
let cl4 = new Client(5, 'oleg', 'bober', 'fhfdjsf@gmail.com', '09356545332', ['toy']);
let cl5 = new Client(4, 'max', 'hupl', 'fhQQjsf@gmail.com', '06656354332', ['keyboard', 'mouse', 'carpet']);
let cl6 = new Client(10, 'nastya', 'nya', 'fdsgfdjsf@gmail.com', '0995638543', ['pupet', 'doll', 'toy', 'chair', 'chair', 'table', 'lamp']);
let cl7 = new Client(7, 'tanya', 'pug', 'fhffdsjf@gmail.com', '0995639732', ['axe', 'hoe', 'shovel', 'pickaxe']);
let cl8 = new Client(8, 'sergiy', 'buda', 'fjjfdsjsf@gmail.com', '0995638432', ['monitor', 'cable', 'camera', 'lamp', 'chair']);
let cl9 = new Client(9, 'volodya', 'savik', 'fsoifsjsf@gmail.com', '0675624432', ['book', 'pen']);
let cl10 = new Client(6, 'galuna', 'hupl', 'jdyassf@gmail.com', '0505638532', ['hummer', 'axe', 'pickaxe', 'flashlight', 'battery', 'helmet']);

let clientsPush = (cl) => {
    clients.push(cl)
}

clientsPush(cl1);
clientsPush(cl2);
clientsPush(cl3);
clientsPush(cl4);
clientsPush(cl5);
clientsPush(cl6);
clientsPush(cl7);
clientsPush(cl8);
clientsPush(cl9);
clientsPush(cl10);

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

let sortedClients = clients.sort((a, b) => {
   return a.order.length - b.order.length;
});

console.log(clients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     }
//     this.info = function () {
//         console.log(
//             `Model : ${this.model},`,
//             `Producer : ${this.producer},`,
//             `Year : ${this.year},`,
//             `MaxSpeed : ${this.maxSpeed},`,
//             `EngineCapacity : ${this.engineCapacity}`
//         );
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//       this.driver = driver;
//     }
// }
//  let driver = {name: 'vasya', age: 31, status: false};
//
// let car = new Car('porshe', 'porshe', '2012', '329', '5')
// console.log(car)
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(400)
// car.changeYear(2017)
// car.addDriver(driver)
//
// car.info()


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;

        this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
        };
        this.info = function () {
            console.log(
                `Model : ${this.model},`,
                `Producer : ${this.producer},`,
                `Year : ${this.year},`,
                `MaxSpeed : ${this.maxSpeed},`,
                `EngineCapacity : ${this.engineCapacity}`
            );
        };
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = newSpeed;
        };
        this.changeYear = function (newValue) {
            this.year = newValue;
       };
        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
}

let driver = {name: 'vasya', age: 31, status: false}

let car10 = new Car('porshe', 'porshe', '2012', '329', '5')
console.log(car10)

car10.drive();
car10.info();
car10.increaseMaxSpeed(500);
car10.changeYear(2020);
car10.addDriver(driver);
car10.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let girls = [
    new Popelushka('olya', '20', '34'),
    new Popelushka('anya', '19', '35'),
    new Popelushka('tanya', '20', '36'),
    new Popelushka('olya', '23', '37'),
    new Popelushka('alina', '21', '35'),
    new Popelushka('ira', '21', '37'),
    new Popelushka('oksana', '22', '35'),
    new Popelushka('galuna', '24', '38'),
    new Popelushka('anya', '23', '37'),
    new Popelushka('vika', '21', '34')
]
console.log(girls);

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let prince = new Prince('artur', '25', '36');
console.log(prince);

let cheker = (prince, girls) => {
    for (const girl of girls) {
        if (girl.size === prince.size) {
            console.log(`Туфля належить ${girl.name}`);
        }
    }

 }

cheker(prince, girls)

let finder = (prince, girls) => {
    let find = girls.find(value => prince.size === value.size)
    console .log(find)
}

finder(prince, girls)


