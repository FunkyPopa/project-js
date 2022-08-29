//
// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі

function wakeUp() {
    return new Promise( resolve => {
        setTimeout(() => {
           console.log('Прокинутись');
            resolve();
        }, 100);
    });
};

function breakfast() {
   return  new Promise(resolve => {
       setTimeout( () => {
           console.log('Поснідати');
           resolve();
        }, 300);
    });
};

function shower() {
    return new Promise( resolve => {
        setTimeout(() => {
            console.log('Піти в душ');
            resolve();
        }, 1000);
    });
};

function dressUp() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Одягнутися');
            resolve();
        }, 800);
    });
};

function goToBusStop() {
    return new Promise( resolve => {
        setTimeout(() => {
            console.log('Піти на зупинку');
            resolve();
        }, 3000);
    });
};

function waitForBus() {
    return new Promise( resolve => {
       setTimeout( () => {
           console.log('Дочекатись автобус');
           resolve();
       }, 2000);
    });
};

function startWorking() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Почати працювати');
            resolve();
        }, 7000);
    });
};

function  lunch() {
    return new Promise( resolve => {
       setTimeout(() => {
           console.log('Пообідати');
           resolve();
       }, 6000);
    });
};

function goToHome() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Іти додому');
            resolve();
        }, 2000);
    });
};

function dinner() {
    return new Promise( resolve => {
       setTimeout( () => {
           console.log('Повечеряти');
           resolve();
       }, 7000);
    });
};

function goSleep() {
    return new  Promise( resolve => {
        setTimeout( () => {
            console.log('Піти спати');
            resolve();
        }, 2000);
    });
};





wakeUp()
    .then( () => {
       return  breakfast()
    })
    .then( () => {
        return  shower()
    })
    .then( () => {
       return  dressUp()
    })
    .then( () => {
       return  goToBusStop()
    })
    .then( () => {
       return  waitForBus()
    })
    .then( () => {
      return  startWorking()
    })
    .then( () => {
      return  lunch()
    })
    .then( () => {
       return  goToHome()
    })
    .then( () => {
        return dinner()
    })
    .then( () => {
        return goSleep()
    });


async function timeTable() {
    await wakeUp();
    await breakfast();
    await shower();
    await dressUp();
    await goToBusStop();
    await waitForBus();
    await startWorking();
    await lunch();
    await goToHome();
    await dinner();
    await goSleep();
}

timeTable();