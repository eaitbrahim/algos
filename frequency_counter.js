/*
Write a function called same, which accepts 2 arrays. The function should 
return true if every value in the array has its corresponding value
squared in the second array. The frequency of values must be the same.
*/

// Solution 1
function same1(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1) return false;
        arr2.splice(correctIndex, 1);
    }
    return true;
}

// Solution 2
function same2(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1) return false;
        arr2.splice(correctIndex, 1);
    }
    return true;
}