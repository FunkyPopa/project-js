let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: "Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.",
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створивши для кожного об'єкту масиву <div class='member'> та наповнити його даними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

for (const simpson of simpsons) {
   let div = document.createElement('div');
    document.body.appendChild(div)
    div.classList.add('member')


    let h2 = document.createElement('h2');
    h2.innerText = simpson.name + " " + simpson.surname

    let pAge = document.createElement('p');
    pAge.classList.add('age')
    pAge.innerText = simpson.age

    let img = document.createElement('img');
    img.src = simpson.photo

    let pInfo = document.createElement('p');
    pInfo.classList.add('info')
    pInfo.innerText = simpson.info


    div.append(h2, pAge, img, pInfo)


}

// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------

// for (const item of coursesArray) {
//     let mainDiv = document.createElement('div');
//     document.body.appendChild(mainDiv)
//     mainDiv.classList.add('main')
//
//     let title = document.createElement('div');
//     mainDiv.appendChild(title)
//     title.innerText = item.title
//     title.classList.add('title')
//
//     let monthDuration = document.createElement('div');
//     mainDiv.appendChild(monthDuration)
//     monthDuration.innerText = item.monthDuration
//     monthDuration.classList.add('month-Duration')
//
//     let hourDuration = document.createElement('div');
//     mainDiv.appendChild(hourDuration)
//     hourDuration.innerText = item.hourDuration
//     hourDuration.classList.add('hour-Duration')
//
//     let wrapper = document.createElement('div');
//     mainDiv.appendChild(wrapper)
//     wrapper.append(monthDuration, hourDuration)
//     wrapper.classList.add('wrapper')
//
//
//     let modules = item.modules
//
//     for (const item of modules) {
//         let liWrapper = document.createElement('ul')
//         mainDiv.appendChild(liWrapper)
//         liWrapper.classList.add('ul')
//
//         let li = document.createElement('li')
//         liWrapper.appendChild(li)
//         li.innerText = item
//     }
//
// };

//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
//- клонувати його повністю, та додати клон в body.

// let block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta')
// block.style.background = 'blue'
// block.style.width = '200px'
// block.style.height = '200px'
// document.body.appendChild(block)
//
// let block2 = block.cloneNode(true);
// block2.style.marginTop = '10px'
// document.body.appendChild(block2)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


// <----- file template1.html


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     document.body.appendChild(div)
//
//     let h2 = document.createElement('h2');
//     div.appendChild(h2)
//     h2.innerText = element.title + ' - ' + element.monthDuration
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     document.body.appendChild(div)
//     div.classList.add('item')
//
//     let h1 = document.createElement('h1');
//     div.appendChild(h1)
//     h1.classList.add('heading')
//     h1.innerText = element.title
//
//     let p = document.createElement('p')
//     div.appendChild(p)
//     p.classList.add('description')
//     p.innerText = element.monthDuration
//
// }

// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let element = document.createElement('div')
// document.body.appendChild(element)
// element.id = 'text'
// element.innerText = 'HI!'
//
// let button = document.createElement('button')
// document.body.appendChild(button)
// button.classList.add('btn')
// button.innerText = 'close'
//
// button.onclick = function () {
//     element.style.display = 'none'
// }

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let div = document.createElement('div')
// document.body.appendChild(div)
//
// let input = document.createElement('input');
// div.appendChild(input)
// input.placeholder = 'Ваш вік'
//
//
// let btn = document.createElement('button');
// document.body.appendChild(btn)
// btn.classList.add('submit')
// btn.innerText = 'submit'
//
// btn.onclick = function () {
//     if(input.value < 18 && input.value > 0) {
//         alert('show cartoon')
//     } else if (input.value >= 18) {
//         alert('show boobs')
//     } else {
//         alert('ERROR')
//     }
//
// }

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

// let div = document.createElement('div')
// document.body.appendChild(div)
//
// let input1 = document.createElement('input');
// input1.classList.add('input')
// input1.placeholder = 'number of lines'
// let input2 = document.createElement('input');
// input2.classList.add('input')
// input2.placeholder = 'number of cells'
// let input3 = document.createElement('input');
// input3.classList.add('input')
// input3.placeholder = 'content of cells'
//
// div.append(input1, input2, input3)
//
// let btn = document.createElement('button')
// document.body.appendChild(btn)
// btn.classList.add('submit')
// btn.innerText = 'Submit'
//
//
// btn.onclick = function () {
//     let input1Value = +input1.value;
//     let input2Value = +input2.value;
//     let input3Value = input3.value;
//
//     if (input1Value && input1Value !== NaN && input2Value && input2Value !== NaN && input3Value) {
//         for (let i = 0; i < input1Value; i++) {
//             let numbOfLines = document.createElement('div');
//             document.body.appendChild(numbOfLines)
//             numbOfLines.classList.add('numbOfLines')
//             console.log(input1.value)
//
//             for (let i = 0; i < input2Value; i++) {
//                 let numbOfCells = document.createElement('div');
//                 numbOfLines.appendChild(numbOfCells)
//                 numbOfCells.classList.add('numbOfCells')
//                 console.log(input2.value)
//
//                     let contentOfCells = document.createElement('p');
//                     numbOfCells.appendChild(contentOfCells)
//                     contentOfCells.classList.add('contentOfCells')
//                     contentOfCells.innerText = input3.value
//                     console.log(input3.value)
//             }
//
//         }
//
//     }
//
// };

