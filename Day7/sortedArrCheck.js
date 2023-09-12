const arr = [1,2,2,2,3,5 ,4,5,6,7];


const isSortedArr = (arr) =>{
    for (let i = 1; i < arr.length; i++) {
        if(arr[i -1] > arr[i]){
            return false;
        } 
        
    }
    return true;
}
console.log("isSortedArr(arr) ===> " , isSortedArr(arr))