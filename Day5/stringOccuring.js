// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// exapmle ===> string Array ===>  ["abcde", "sdaklfj", "asdjf", "na", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"] 

// quires ===> ["abcde", "sdaklfj", "asdjf", "na","basdn"]


// we have to return an array of integar which contains quires string array each item occuring in the string array 
// 
// answer  [ 1, 3, 4, 3, 2 ]



function matchingStrings(strings, queries) {
    // Write your code here
    const map1 = {}
    const map2 = {}
    for(let i = 0 ; i < strings.length ; i++){
        const item = strings[i] 
        map1[item] =  (map1[item] ?? 0) + 1 ;
    }

    const newArr = []; 

    for(let i = 0 ; i < queries.length ; i++){
        const item =  queries[i];
        newArr.push(map1[item] ?? 0)
    }
    
    console.log("newArr ===>",newArr)
}


// matchingStrings(["abcde",  "sdaklfj", "asdjf", "na", "jagdish", "jagdish", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na","sdaklfj", "asdjf"] , ["abcde","jagdish", "sdaklfj", "asdjf", "na","basdn"])








function diagonalDifference(arr) {
    // Write your code here
    let fullLengthIndex = 0;
    let totalLength = 3;
    let leftToRight = 0;
    let rightToLeft = 0;
    for (let i = 0; i < arr.length; i++) {
        
        // console.log("arr ==> " , arr[i])
        if(arr[i].length === 3){
            fullLengthIndex++;
            totalLength--;
            leftToRight+= arr[i][fullLengthIndex - 1];
            rightToLeft+= arr[i][totalLength];
        }

    }
    
   return rightToLeft > leftToRight  ? rightToLeft - leftToRight : leftToRight -  rightToLeft;

}

console.log(diagonalDifference([[4],
    [-1 ,1 ,-7 ,-8],
    [-10, -8 ,-5, -2],
    [0 , 9  ,7 ,-1],
    [4, 4 ,-2 ,1] ]))
