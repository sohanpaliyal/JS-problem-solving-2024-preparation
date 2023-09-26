const arr1 = [1,2,3,4,4,5,6,7];
const arr2 = [2,3,4,4,5,7,8];
const visitedArr = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 ];

const intersectionOfTwoSortedArr  = (arr1, arr2) =>{
const intersection = [];
    for (let i = 0; i < arr1.length; i++) {
       for (let j = 0; j < arr2.length; j++) {
        
        if(arr1[i] === arr2[j] && visitedArr[j] === 0 ){
            intersection.push(arr1[i]);
            visitedArr[j] = 1;
            break;
        }


        if(arr1[i] < arr2[j]) break; 
       }
        
    }
    return intersection;
}


console.log(intersectionOfTwoSortedArr(arr1, arr2))