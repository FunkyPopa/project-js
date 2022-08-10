//1

// let hello = 'hello world';
// let lorem = 'lorem ipsum';
// let js = 'javascript is cool';
//
// console.log(hello.length);
// console.log(lorem.length);
// console.log(js.length);

//2

// let hello = 'hello world';
// let lorem = 'lorem ipsum';
// let js = 'javascript is cool';
//
// console.log(hello.toUpperCase());
// console.log(lorem.toUpperCase());
// console.log(js.toUpperCase());

//3

let hello = 'HELLO WORLD';
let lorem = 'LOREM IPSUM';
let js = 'JAVASCRIPT IS COOL';

console.log(hello.toLowerCase());
console.log(lorem.toLowerCase());
console.log(js.toLowerCase());

//4

// let str = ' dirty string   '
// console.log(str.substring(1, 13));

//5

let str = 'Ревуть воли як ясла повні';

let stringToArray = (str) => {
   let array = str.split(' ');
   return array;

}

console.log(stringToArray(str));

//6

let array = [10,8,-7,55,987,-1011,0,1050,0];

let mapedArray = array.map(value => {
    return `${value}`;
});

console.log(mapedArray);

//7

let numbs = [11,21,3];

let sortNums = (value, direction) => {
    if (direction === 'ascending') {
        value.sort((a, b) => {
            return a - b;
        })
     return value;
    } else if (direction === 'descending') {
        value.sort((a, b) => {
            return b - a;
        })
        return value;
    } else {
        console.log('error')
    }
};

console.log(sortNums(numbs,'ascending'));

//8

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//сортування
let sortedCourse = coursesAndDurationArray.sort((u1,u2) => {
    return u1.monthDuration - u2.monthDuration
});

console.log(sortedCourse);

//фільтрування
let filteredCousrse = coursesAndDurationArray.filter(value => value.monthDuration > 5);

console.log(filteredCousrse);

//9

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},

    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},

    {cardSuit: 'none', value: 'joker', color: 'black'},
    {cardSuit: 'none', value: 'joker', color: 'red'},

]

// - знайти піковий туз
let findAce = cards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(findAce);

// - всі шістки
let findAllSix = cards.filter(value => value.value === '6');
console.log(findAllSix);

// - всі червоні карти
let findAllRed = cards.filter(value => value.color === 'red');
console.log(findAllRed);

// - всі буби
let findAllDiamonds = cards.filter(value => value.cardSuit === 'diamond');
console.log(findAllDiamonds);

// - всі трефи від 9 та більше
let clubsFinder = cards.filter(value => value.cardSuit === 'clubs' && value.value >= 9)
console.log(clubsFinder);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

