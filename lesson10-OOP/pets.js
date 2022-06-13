const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

//dot notation 
console.log(ernie.animal)
console.log(ernie.breed)
console.log(ernie.age)
ernie.bark()

//bracket notation
console.log(ernie["animal"])
console.log(ernie["breed"])
console.log(ernie["age"])
ernie["bark"]()

//didn't need quotes here 
let prop = "breed"
console.log(ernie[prop])

//reassign and add new items 
ernie.age = 2
ernie["age"] = 3

ernie.color = "black"

console.log(ernie.age)
console.log(ernie.color)

//Encapsulation describes consolidating an object’s properties and methods into a package and attaching it to a variable.