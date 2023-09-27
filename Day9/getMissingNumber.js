const arr = [1,2,3,5];


const getMissingNumber = (arr) =>{
        for(let i = 1; i <= arr.length; i++) {
            console.log("arr[i]  ===> ",arr[i])
            let flag = 0;
            for (let j = 0; j < arr.length; j++) {
                if(i === arr[j]){
                    flag = 1;
                    break;
                }                
            }
            if(!flag) return i;
        }
    }


    console.log("getMissingNumber(arr) ====>",getMissingNumber(arr))