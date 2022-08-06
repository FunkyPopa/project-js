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

let numbers1 = [3,5,8];

function minNumber (arr) {
    if (arr[0] < arr[1] && arr[0] < arr[2]) {
        console.log(arr[0]);
    } else if (arr[1] < arr[0] && arr[1] < arr[2]) {
        console.log(arr[1])
    } else if (arr[2] < arr[0] && arr[2] < arr[1]) {
        console.log(arr[2])
    } else {
        console.log('error');
    }
}

minNumber(numbers1);


//11

let numbers2 = [10,20,30,60];

function sum (arr) {
    const numCounter = arr[0] + arr[1] + arr[2] + arr[3];
    return numCounter;
}

console.log(sum(numbers2));