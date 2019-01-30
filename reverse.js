function reverseArray(arr) {
    let newarr = [];
     for (let i = arr.length - 1; i >= 0; i--) {
       newarr.push(arr[i]);
   }
     return newarr;
   }
   
   
   console.log(reverseArray(["A", "B", "C"]));
   console.log(reverseArray(arrayValue));
   // → ["C", "B", "A"];
   let arrayValue = [1, 2, 3, 4, 5];
   
   console.log(arrayValue);
   // → [5, 4, 3, 2, 1]
   