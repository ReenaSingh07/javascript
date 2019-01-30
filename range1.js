function range(start_index,end_index,reverse) {
    if(reverse==-1)
    {
     var arr = [];
     for (let i = start_index; i >= end_index; i--) {
         arr.push(i);
     }
     return arr;
    }
   else
   {
       var arr = [];
     for (let i = start_index; i <= end_index; i++) {
         arr.push(i);
     }
     return arr;
   }
   
 }
 function sum(arr)
 {
   let t=0;
   for(let key in arr)
   {
    t=t+arr[key];
   }
   return t;
 }
    
 console.log(range(1, 10));
 // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 console.log(range(5, 2, -1));
   
 // → [5, 4, 3, 2]
 console.log(sum(range(1, 10)));
 // → 55