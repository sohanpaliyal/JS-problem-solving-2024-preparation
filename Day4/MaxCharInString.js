// find maximium occouring word's number in string 




const MaxOccurWordNumInString = (str) => {
    const strMap = {};

    for (let i = 0; i < str.length; i++) {
        strMap[str[i]] ? strMap[str[i]]+=1 : strMap[str[i]] =  1;
        
    }
    let max = 1;
    for (const k in strMap) {
        if(strMap[k] > max)   max = strMap[k] 
    }
    return max;
    // console.log(strMap);
}

console.log(MaxOccurWordNumInString('hellothere'));