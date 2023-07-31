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
    for(let i = 0 ; i <queries.length ; i++){
         map1[queries[i]] ? map1[queries[i]]+=1 : map1[queries[i]] = 1;
    }
    
    for(let i = 0 ; i <strings.length ; i++){
         map2[strings[i]] ? map2[strings[i]]+=1 : map2[strings[i]] = 1;
    }
   const newArr = []; 
    
    
for (const key in map1) {
    if(!map2[key]){
        map2[key] = 0
    }
    
    newArr.push(map2[key])
    
}
   
    console.log( newArr)
    return newArr
}


matchingStrings(["abcde", "sdaklfj", "asdjf", "na", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"] , ["abcde", "sdaklfj", "asdjf", "na","basdn"])



