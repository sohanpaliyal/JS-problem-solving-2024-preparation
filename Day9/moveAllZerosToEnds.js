const arr = [2, 5, 5, 0, 0, 2456];

// brute force 
const moveAllZeros = (arr) => {
    // const tempArr = [];
    // let zeros = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i]!==0 ){
    //         tempArr.push(arr[i])
    //     }else{
    //         zeros++;
    //     }
    // }

    // for (let i = 0; i < zeros; i++) {
    //     tempArr.push(0)
    // }
    // return tempArr;
}



    // two pointer approach 

// optimal solution
    const moveAllZerosToEnd = (arr) => {
        let firstZero = -1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                firstZero = i;
                break;
            }
        }

        if (firstZero < 0) return arr;


        for (let i = firstZero + 1; i < arr.length; i++) {
            if (arr[i] !== 0) {
                const temp = arr[i];
                arr[i] = arr[firstZero];
                arr[firstZero] = temp;
                firstZero++;
            }
        }
        return arr;
    }


    console.log("moveAllZeros(arr) ===>", moveAllZerosToEnd(arr))


