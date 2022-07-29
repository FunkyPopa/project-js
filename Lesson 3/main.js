//1

let x = 777;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

//2

let time = 1; // числа 0-59

if (time > 0 && time <= 15) {
    console.log('Перша чверть!');
} else if (time > 15 && time <= 30) {
    console.log('Друга чверть!');
} else if (time > 30 && time <= 45) {
    console.log('Третя чверть!');
} else if (time > 45 && time <= 59) {
    console.log('Четверта чверть!');
} else {
    console.log('???????');
}

//3

let day = 1; // числа 1-31

if (day >= 1 && day <= 10) {
    console.log('Перша');
} else if (day >= 11 && day <= 20) {
    console.log('Друга');
} else if (day >= 21 && day <= 31) {
    console.log('Третя');
} else {
    console.log('???????');
}

//4

let n = +prompt('Який день за порядком вас інтересує?');

switch (n) {
    case 1:
        document.write('Monday');
        break
    case 2:
        document.write('Tuesday');
        break
    case 3:
        document.write('Wednesday');
        break
    case 4:
        document.write('Thursday');
        break
    case 5:
        document.write('Friday');
        break
    case 6:
        document.write('Saturday')
        break
    case 7:
        document.write('Sunday');
        break
    default:
        document.write('ERROR');
}

//5

let n1 = +prompt('Перше число');
let n2 = +prompt('Друге число');

if (n1 > n2) {
    console.log(n1);
} else if (n2 > n1) {
    console.log(n2);
} else if (n1 === n2) {
    console.log('Числа рівні');
} else {
    console.log('ERROR');
}

//6

let a = false;

if (false || !a) {
    console.log('default');
} else {
    console.log('not default');
}