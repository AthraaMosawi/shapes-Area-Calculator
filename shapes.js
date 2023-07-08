// const { Module } = require("module");

class Area{
    constructor(x,y,shape){
        this.shape = shape
        this.width = x;
        this.height = y;
    }
    getArea(){
        return this.width * this.height;
    }
    getAreaInfo(){
        console.log(`The Area of ${this.shape} is equal ${this.getArea()}`);
    }
}
class Square extends Area{
    constructor(x){
        super(x, x, 'Square');
    }
}
class Rectangle extends Area{
    constructor(x, y){
        super(x, y, 'Rectangle');
    }
}

class Circle extends Area{
    //s = pi * r2
    constructor(x){
        super(x,x,'Circle');
    }
    getCircleArea(){
        return Math.PI * this.getArea();
        //return Math.PI * Math.Pow(x,2);
    }
}
class Triangle extends Area{
    //Area = (base * height) / 2
    constructor(b,h){
        super(b,h,'Triangle');
    }
    getTriArea(){
        return this.getArea() / 2;
    }
    getAreaInfo(){
        console.log(`The Area of ${this.shape} is equal ${this.getTriArea()}`);
    }
}

// complete the class of Parallelogram
class Parallelogram extends Area{
    //Area = base * height
    constructor(b,h){
        super(b,h,'Parallelogram');
    }
    
}

// complete the class of Cube
class Cube extends Area{
    //Area = 6 * (a*a) where a = edge
    constructor(a){
        super(a, a,'Cube');
    }
    getCubeArea(){
        return 6 * this.getArea();
    }
    getAreaInfo(){
        console.log(`The Area of ${this.shape} is equal ${this.getCubeArea()}`);
    }
}

// usage
let sq1 = new Square(5);
sq1.getAreaInfo();

let rec1 = new Rectangle(3,4);
rec1.getAreaInfo();

let cir1 = new Circle(5);
cir1.getCircleArea();

let par1 = new Parallelogram(10,8);
par1.getAreaInfo();

let cub1 = new Cube(3,3);
cub1.getAreaInfo();

let tri1 = new Triangle(3,2);
tri1.getAreaInfo();

//event on change

let shape = document.getElementById("dropDown");
let shapeWidth = document.getElementById("shapeWidth");
let shapeHeight = document.getElementById("shapeHeight");
let result = document.getElementById("result");

function checkShape(event){
    event.preventDefault();
    shapeWidth.value = "";
    shapeHeight.value = "";
    result.innerHTML = "";

    if(shape.value == sq1.shape || shape.value == cir1.shape){
        shapeWidth.disabled = true;
        shapeHeight.focus();
    } else{
        shapeWidth.disabled = false;
        shapeHeight.disabled = false;
    }
}
//submit
function submitValues() {
    let sqr2 = new Square(shapeHeight.value);
    let rec2 = new Rectangle(shapeWidth.value, shapeHeight.value);
    let per2 = new Parallelogram(shapeWidth.value, shapeHeight.value);
    let cub2 = new Cube(shapeWidth.value, shapeHeight.value);
    let tri2 = new Triangle(shapeWidth.value, shapeHeight.value);
    let cir1 = new Circle(shapeHeight.value);

    if (shape.value === sqr2.shape) {
        result.innerHTML = `The Area of ${sqr2.shape} is equal to ${sqr2.getArea()}`;
    } else if(shape.value === rec2.shape){
        result.innerHTML = `The Area of ${rec2.shape} is equal to ${rec2.getArea()}`;
    } else if(shape.value === per2.shape){
        result.innerHTML = `The Area of ${per2.shape} is equal to ${per2.getArea()}`;
    } else if(shape.value === cub2.shape){
        result.innerHTML = `The Area of ${cub2.shape} is equal to ${cub2.getArea()}`;
    } else if(shape.value === tri2.shape){
        result.innerHTML = `The Area of ${tri2.shape} is equal to ${tri2.getTriArea()}`;
    } else if(shape.value === cir1.shape){
        result.innerHTML = `The Area of ${cir1.shape} is equal to ${cir1.getCircleArea()}`;
    }
}
