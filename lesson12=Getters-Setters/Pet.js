
class Pet {
    //constructor method goes at the top.  This is the "factory" that creates objects based on the "class" blueprint
    constructor(animal, age, breed, sound) {
        this.animal = animal 
        this.age = age
        this.breed = breed
        this.sound = sound
    }

    //getter methods ... will not be attached to obj and wont be seen in the console
    get activity(){
        const today = new Date()
        const hour = today.getHours()
        if(hour > 8 && hour <= 20){
            return "playing"
        }else{
            return "sleeping"
        }
    }

    //setters
    set owner(owner){
        
        // this.owner = owner //this naming convention is not allowed for setters 
        this._owner = owner //instead add an underscore.  This is industry standard 
        console.log(`setting called: ${owner}`)
        //to acces this, we need a getter method 
    }

    get owner(){
        return this._owner
        //this isn't the only way to access the setter method 
    }

    //when adding methods inside classes, you dont use the "function" keyword.  The method also is outside of the constructor method 
    speak(){
        console.log(this.sound)
    }
}

//create new pets 
const gizmo = new Pet("dog", 3, "Chichi Mix", "ruff ruff")
const zane = new Pet("dog", 8, "Border Collie", "woof, woof")

console.log(gizmo.activity)
console.log(gizmo)

// gizmo.speak()
// zane.speak()

gizmo.owner = "Tami"
console.log(gizmo.owner)