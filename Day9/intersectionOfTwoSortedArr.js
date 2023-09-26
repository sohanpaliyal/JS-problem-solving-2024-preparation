const arr1 = [1,2,3,4,4,5,6,7];
const arr2 = [2,3,4,4,5,7,8];
const visitedArr = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 ];

const intersectionOfTwoSortedArr  = (arr1, arr2) =>{
    // optimal solution 
    let firstIndex = 0 ;
    let secondIndex = 0;
    const intersection = [];
    while(firstIndex < arr1.length && secondIndex < arr2.length){
        console.log("firstIndex , secondIndex --->",firstIndex , secondIndex)
        if(arr1[firstIndex]!== arr2[secondIndex]){
            firstIndex++;
        }else{
            intersection.push(arr1[firstIndex])
            firstIndex++;
            secondIndex++;
        }
    }
    return intersection;




// ------------------brute force -----------------
// const intersection = [];
//     for (let i = 0; i < arr1.length; i++) {
//        for (let j = 0; j < arr2.length; j++) {
        
//         if(arr1[i] === arr2[j] && visitedArr[j] === 0 ){
//             intersection.push(arr1[i]);
//             visitedArr[j] = 1;
//             break;
//         }


//         if(arr1[i] < arr2[j]) break; 
//        }
        
//     }
    // return intersection;



}


console.log(intersectionOfTwoSortedArr(arr1, arr2))