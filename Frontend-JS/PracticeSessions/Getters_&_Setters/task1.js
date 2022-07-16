// Create a getter method called area that calculates the area of the rectangle. The formula for the area of rectangle is area = length * width.

class Rectangle {
    constructor(width, length){
        this.width = width;
        this.length = length;
    }

    get area(){
        return this.width * this.length
    }
}

const rect1 = new Rectangle(10, 5);
const rect2 = new Rectangle(6, 12);
const rect3 = new Rectangle(15, 20);

// Create an array called areas with three elements so that the first element (areas[0]) holds the value of the area property of rect1, the second element holds the value of the area property of rect2, and the third element holds the value of the area property of rect3

let areas = [rect1.area, rect2.area, rect3.area]
