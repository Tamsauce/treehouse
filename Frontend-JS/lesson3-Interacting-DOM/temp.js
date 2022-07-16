function sayHi(){
	console.log("Hello")
}

function hiAndBye(func){
  func()
  console.log('bye');
}


//option 1 to call - this one is passing in the value of sayHi
hiAndBye(sayHi)  

//option 2 to call - this one is passing in the function directions as a param
hiAndBye(function sayHi(){
	console.log("Hello twice")
})

//option 3 to call - this one is passing in an anonymous function that contains the instructions of consoling the string 
hiAndBye( () => {
	console.log("Hello thrice")
})