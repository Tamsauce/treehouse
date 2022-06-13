class Pet {
    //constructor method goes at the top.  This is the "factory" that creates objects based on the "class" blueprint
    constructor(animal, age, breed, sound) {
        this.animal = animal 
        this.age = age
        this.breed = breed
        this.sound = sound
    }

    //when adding methods inside classes, you dont use the "function" keyword.  The method also is outside of the constructor method 
    speak(){
        console.log(this.sound)
    }
}

//create new pets 
const gizmo = new Pet("dog", 3, "Chichi Mix", "ruff ruff")
const zane = new Pet("dog", 8, "Border Collie", "woof, woof")

console.log(gizmo)

gizmo.speak()
zane.speak()