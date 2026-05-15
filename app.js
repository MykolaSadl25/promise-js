// Promise intro

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random() > 0.5;
//   setTimeout(() => {
//     if (random) {
//       resolve("Completed");
//     }
//     else {
//       reject("Rejected");
//     }
//   }, 1000);
// });
// // ніколи не став catch перед then!!!!!!!!
// promise.then((res)=>{console.log(res)})// для вдалих запитів
// .catch((error)=>{
//     console.log(error);
//     console.log("Error in catch()",);// для error-ів
// })

// .finally(()=>{console.log("I will work doesn't matter what result"); - використати поки запит на сервер триває щоб вивести спінер/загрузка

// promise.then((res)=>{console.log(res)}).catch((error)=>{console.log(error);});

// const makeOrderDish = (dish)=>{
//        const random = Math.random() > 0.5;
//        const promise = new Promise((onSuccess, onError) => {
//         setTimeout(()=>{
//         if (random) {
//             onSuccess(`Here is your order ${dish}`)
//         }
//         else{
//             onError(`Run out of stock, come again tommorow`)
//         }
//        },1000)
//        })

//        return promise
// }

// function onSuccessDish(res) {
//     console.log(res);
// }
// function onErrorDish(error) {
//     console.log(error);
// }
// // // makeOrderDish("Pierogi",onSuccessDish,onErrorDish)

// makeOrderDish("Pierogy").then(onSuccessDish).catch(onErrorDish);

// const mykolaPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Mykola finished his JS task")
//     },2000)
// });

// const olenaPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Olena finished her canva slides")
//     },1000)
// });

// const bogdanPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Bogdan finished presenting our project")
//     },5000)
// });

// Promise Methods

// Promise.all()

// Приймає масив промісів, очікує їх виконання і повертає проміс.
// Якщо всі проміси виконаються успішно, проміс, що повертається,
// перейде у стан fulfilled, а його значенням буде масив результатів
//  виконання кожного промісу.

// Promise.all([mykolaPromise,olenaPromise,bogdanPromise]).then(res=> console.log(res));

// const mykolaPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Mykola finished his JS task")
//     },2000)
// });

// const olenaPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject("Olena  hasnt finished her canva slides")
//     },1000)
// });

// const bogdanPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Bogdan finished presenting our project")
//     },5000)
// });

// У разі, коли хоча б один з промісів буде відхилений, проміс,
// що повертається, перейде у стан rejected,
// а його значенням буде помилка.

// Promise.all([mykolaPromise,olenaPromise,bogdanPromise]).then(res=> console.log(res)).catch(rej=>console.log(rej));

// Promise.allSettled()
// повертає масив об'єктів з результатами виконання промісів, не важливо чи успішно чи відхилено.

// const mykolaPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Mykola finished his JS task")
//     },2000)
// });

// const olenaPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         // resolve("Olena finished her canva slides")
//         reject("Olena hasnt finished her canva slides")
//     },1000)
// });

// const bogdanPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Bogdan finished presenting our project")
//     },5000)
// });

// Promise.allSettled([mykolaPromise,olenaPromise,bogdanPromise]).then(res=> console.log(res)).catch(rej=>console.log(rej));

// Promise.race()
// чекає на перший виконаний проміс незалежно з яким результатом

// const mykolaPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Mykola came second in 2seconds")
//     },2000)
// });

// const olenaPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         // resolve("Olena came first in 1 second")
//         reject("Olena decided not to run")
//     },1000)
// });

// const bogdanPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Bogdan came third in 3 seconds")
//     },3000)
// });

// Promise.race([mykolaPromise,olenaPromise,bogdanPromise]).then(res=> console.log(res)).catch(rej=>console.log(rej));

// Promise.any()
// чекає на перший успішно виконаний проміс і повертає його,
// якщо всі проміси не успішні то результат можна подивитися
// у властивості errors

// const mykolaPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         // resolve("Mykola came second in 2seconds")
//         reject("Mykola decided not to run")
//     },2000)
// });

// const olenaPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         // resolve("Olena came first in 1 second")
//         reject("Olena decided not to run")
//     },1000)
// });

// const bogdanPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject("Bogdan decided not to run because nobody is running")
//     },3000)
// });

// Promise.any([mykolaPromise,olenaPromise,bogdanPromise]).then(res=> console.log(res)).catch(error=>console.log(error.errors));

// Завдання 1

// "Порівняння кількох промісів"

// Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.

// Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
// Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
// Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
// Обробіть результати вирішення промісів та виведіть їх у консоль.
