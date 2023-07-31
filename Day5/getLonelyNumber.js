

const arr = [1,2,3,4,3,2,1];



const getUniqueNumber = (arr) =>{


    const map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] ? map[arr[i]]+=1 : map[arr[i]] = 1;
        
    }


    for (const key in map) {
       if(map[key] === 1){
        return key;
       }
    }
    // console.log(map)
}
console.log(getUniqueNumber(arr));