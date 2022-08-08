//1

let rectangleArea = (a, b) => a * b;

console.log(rectangleArea(2, 3));

//2

let circleArea = (r) => r * 2 + 'π'; // πr2

console.log(circleArea(3));

//3

let cylinderArea = (h, r) => 2 * r * h + 'π' // 2πRH

console.log(cylinderArea(6, 4));

//4

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false}
];

function arrCounter (arr) {
    for (const item of arr) {
        console.log(item);
    }
}

arrCounter(users);

//5

function greeting () {
    document.write(`<p>${arguments[0]}</p>`);
}

greeting('HELLO OKTEN!');

//6

function someText () {
    document.write(`<ul>`);
        document.write(`
            <li>${arguments[0]}</li>
            <li>${arguments[0]}</li>
            <li>${arguments[0]}</li>
        `);
    document.write(`</ul>`);
}

someText('text');

//7

function question (a, b) {
    document.write(`<ul>`);
    for (let i = 0; i < b; i++) {
        document.write(`
            <li>${arguments[0]}</li>
        `);
    }
    document.write(`</ul>`);
}

question('what?', 7);

//8

let array = [1, false, 311,'hello', 'okten', true];

function arrayList (arr) {
    document.write(`<ul>`);
        for (const item of arr) {
            document.write(`<li>${item}</li>`);
        }
    document.write(`</ul>`);
}

arrayList(array);

//9

let objects = [
    {id: 311, name: 'vasya', age: 31},
    {id: 312, name: 'petya', age: 30},
    {id: 313, name: 'kolya', age: 31},
    {id: 314, name: 'olya', age: 29},
    {id: 315, name: 'max', age: 29},
    {id: 316, name: 'anya', age: 30},
    {id: 317, name: 'oleg', age: 31},
    {id: 318, name: 'andrey', age: 31},
    {id: 319, name: 'masha', age: 29},
    {id: 320, name: 'olya', age: 30}
];

function objectList (arr) {
    for (const item of arr) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`);
    }
}

objectList(objects);

//10

let numbers1 = [5,3,8,12,1,34];

const minNumber = (arr) => {
    let min = arr[0]
        for (let item of arr) {
            if (min > item) {
                min = item
            }
        }
    return min;
}

console.log(minNumber(numbers1));


//11

let numbers2 = [10,20,30,60];

const foo = (arr) => {
    let sum = 0;
    for (let item of arr) {
        sum += item
    }
    return sum;
}


console.log(foo(numbers2));