1]  class Vec{
    constructor(x,y){
    this.x=x;
    this.y=y;
    }
    plus(m){
    return new Vec(this.x+m.x,this.y+m.y);
    }
    minus(m){
    return new Vec(this.x-m.x,this.y-m.y);
    }
    get length(){
    return Math.sqrt(this.x*this.x+this.y*this.y);
    }
    }


    console.log(new Vec(1, 2).plus(new Vec(2, 3)));
    // → Vec{x: 3, y: 5}
    console.log(new Vec(1, 2).minus(new Vec(2, 3)));
    // → Vec{x: -1, y: -1}
    console.log(new Vec(3, 4).length);
    // → 5

4]  let map = {one: true, two: true, hasOwnProperty: true};
   
    
    console.log(Object.prototype.hasOwnProperty.call(map,"one"));
    // → true