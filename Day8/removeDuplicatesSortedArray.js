// remove duplicates from sorted array...
// here it is.



    const arr = [1 , 1 , 2 , 2 , 3]

    // const removeDuplicates = (arr)=>{
    //     const newArr = [arr[0]];
    //     console.log(newArr)
    //     for (let i = 1; i < arr.length; i++) {
    //         if(newArr[newArr.length - 1] !== arr[i]){
    //            newArr.push(arr[i]);
    //         }    
    //     }
    //     return newArr;
    // }

    //        1   2  3    4
    //   0    1   2
    //  [1 , 1 , 2 , 2 , 3]
    removeDuplicates = (arr)=>{
        let startPointer = 0;
        for (let i = 1 ; i < arr.length ; i++) {
           if(arr[startPointer]!==arr[i]){
            startPointer++;
            arr[startPointer] = arr[i]
           }
        }
        arr.length = startPointer + 1;
        return arr;

    }
    
    console.log(removeDuplicates(arr));

    // console.log(Array.from(new Set(arr)))
