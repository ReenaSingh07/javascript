function deepEqual(arr1, arr2) {
    if (arr1 === arr2) return true;
    
    if (arr1 == null || typeof arr1 != "object" ||
    arr2 == null || typeof arr2 != "object") return false;
    
    let keyA = Object.keys(arr1);
    let keyB = Object.keys(arr2);
    
    if (keyA.length != keyB.length) return false;
    
    return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));