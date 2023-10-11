const getThreeLargest = (array) =>{
    let largest = array[0];
    let secLargest = 0;
    let thirdLargest = 0;
    for (let i = 1; i < array.length; i++) {
        if(largest< array[i]){
            thirdLargest = secLargest;
            secLargest = largest;
            largest = array[i];
        } 

        if(array[i] > secLargest && array[i] < largest){
            thirdLargest = secLargest
            secLargest = array[i]
        }

        if(array[i] > thirdLargest && array[i] < largest && array[i]< secLargest){
            thirdLargest = array[i]
        }

        
    }
    return `largest is ${largest} second largest is ${secLargest} and third is ${thirdLargest}`;
}

const arr = [737,767,4,676,3535,768]

console.log("getThreeLargest(arr) ===> " , getThreeLargest(arr))