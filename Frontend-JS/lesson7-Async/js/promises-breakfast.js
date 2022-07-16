const order = false

const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(order){
            resolve("Your order is ready, come and get it");
        }else {
            reject( Error("Oh no, there was a problem with your order") ) 
        }
        
        
    }, 3000);
});

console.log(breakfastPromise)


breakfastPromise
    .then( val => console.log(val) )
    .catch( error => console.log(error))