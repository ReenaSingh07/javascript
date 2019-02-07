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

2]class Group {
    constructor(a){
    this.a=a;
    }
    has(m){
    for(let i in this.a){
    if(this.a[i] == m){
      return true;}
    }
        return false;}
    
    add(m){
    if(!this.has(m)){
      this.a.push(m);}
    }
    delete(m){
      let arr = [];
       if(!this.has(m))
       for(let i of a)
       if(i!=m)
          arr.push(m);
          this.a=this.arr;
      return this.a;
    }  
  }
  
  let group =new Group([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false


4]  let map = {one: true, two: true, hasOwnProperty: true};
   
    
    console.log(Object.prototype.hasOwnProperty.call(map,"one"));
    // → true