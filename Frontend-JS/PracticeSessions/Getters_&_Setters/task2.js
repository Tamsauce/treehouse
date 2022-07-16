// Create a setter method called radius inside the Circle class.

// This method should store the value of the radius using a backing property, _radius. It should also set two additional properties on the Circle class, area, and circumference. These do not need to be backing properties.

// For the purposes of this challenge, use 3.14 to represent π. The formula for circumference is circumference = 2*π*radius, the formula for area is area = π*r^2.

// You can discover how to calculate exponents in JavaScript here.

class Circle {
    set radius(r) {
        this._radius = r;
        this.area = 3.14 * Math.pow(r, 2);
        this.circumference = 2 * 3.14 * r;
    }
}

const circ = new Circle();

//Create a getter method called radius that returns the value of the backing property _radius.