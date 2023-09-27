const arr = [1,2,3,4];


const getMissingNumber = (arr) =>{
        // brute force approach


        // for(let i = 1; i <= arr.length; i++) {
        //     console.log("arr[i]  ===> ",arr[i])
        //     let flag = 0;
        //     for (let j = 0; j < arr.length; j++) {
        //         if(i === arr[j]){
        //             flag = 1;
        //             break;
        //         }                
        //     }
        //     if(!flag) return i;
        // }



        // optimal solution 
        // [1,2,3,5]
        //  0 1 2 3
        // 1 2 3 4
        // index  = 1 
        // while(index < arr.length)

        for (let i = 0; i < arr.length; i++) {
            if(i+1 !== arr[i]){
                return i+1;
            } 
        }

        return arr.length + 1
    }


    console.log("getMissingNumber(arr) ====>",getMissingNumber(arr))