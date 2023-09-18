const arr =[ 2,5,5, 0, 0, 2456 ,630 ,0,50,30,0, 0,0];


const moveAllZeros = (arr) =>{
    const tempArr = [];
    let zeros = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!==0 ){
            zeros++;
            tempArr.push(arr[i])
        }
    }

    for (let i = 0; i < zeros; i++) {
        tempArr.push(0)
    }
    return tempArr;
}

console.log("moveAllZeros(arr) ===>",moveAllZeros(arr))