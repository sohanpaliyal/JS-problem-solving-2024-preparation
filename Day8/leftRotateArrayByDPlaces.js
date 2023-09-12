// left rotate an array by d places 

// suppose you have an array of int. example [1,2,3,4,5] and you have d number example 10
// then you'll have to rotate this array like [3,4,5,1,2];
//  5 , 5 


const arr = [1 , 2 , 3 , 4 , 5];
let d = 3;
d =   d % arr.length;

// console.log(d)
// const tempArr = []

// for (let i = 0; i < d ; i++) {
//    tempArr.push(arr[i])    
// }

// for (let i = arr.length - d - 1; i >= 0 ; i--) {
//     const temp = arr[i+d];
//     tempArr.unshift(temp)
// }

// o[n]

// console.log("tempArr --> " , tempArr)


const reverseArray = (arr , start , end) =>{
    while(start <= end){
        
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        end--;
        start++;
    }
    return arr;
}


 reverseArray(arr, 0 , d - 1);
 reverseArray(arr, d  , arr.length - 1 );
 reverseArray(arr, 0 , arr.length - 1);
 console.log(arr)
