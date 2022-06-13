function isAdult( age){
    return age && age >= 18 
 
}
//console.log(isAdult(39))

function countToFive(start = 0){ //this is a better option 
    start = start || 1  //would not work if you wanted to start at 0 
    for(let i = start ; i <= 5; i++){
        console.log(i)
    }
}
// countToFive(2)

//works 
function greet(name){
    name && console.log (`Hi ${name}!`)

}
greet("Tami")

function greet2(name){
    console.log("doesnt work")
    name && console.log (`Hi ${name}!`)

}
greet2()

//es6 defaults 
function greet3(name = "Tami"){
    name && console.log (`Hi ${name}!`)

}

greet3()