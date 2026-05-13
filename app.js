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
    
const makeOrderDish = (dish)=>{
       const random = Math.random() > 0.5;
       const promise = new Promise((onSuccess, onError) => {
        setTimeout(()=>{
        if (random) {
            onSuccess(`Here is your order ${dish}`)
        }
        else{
            onError(`Run out of stock, come again tommorow`)
        }
       },1000)
       })
       
       return promise
}

function onSuccessDish(res) {
    console.log(res);
}
function onErrorDish(error) {
    console.log(error);
}
// // makeOrderDish("Pierogi",onSuccessDish,onErrorDish)

makeOrderDish("Pierogy").then(onSuccessDish).catch(onErrorDish)