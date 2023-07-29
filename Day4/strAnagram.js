// find if two string's word count is same or not 
// write a function who's going to take 2 parmeters of strings and retrun true or false 


const  checkAnagram = (str1 , str2)=>{

    const map = {};
    const map2 = {};

    if(str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        map[str1[i]] ? map[str1[i]]+=1 : map[str1[i]] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        map2[str2[i]] ? map2[str2[i]]+=1 : map2[str2[i]] = 1;
    }

        // console.log("map ==> " , map);
        // console.log("map2 ==> " , map2);

    for (const key in map) {
        if(map[key] != map2[key]) return false
    }

    return true;
}

console.log(checkAnagram('naman', 'maana'));