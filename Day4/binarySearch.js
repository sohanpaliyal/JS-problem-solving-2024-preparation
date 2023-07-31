// Divide & Conquerer technique
// find the number in the given sorted array => 7 
// [1,2,3,4,5,6,7,8,9,9,10,11,13,15] ===> index 6  -> 7



// function defination ===> okay so we the minIndex and MaxIndex of the array we 'll take two variable and put those indexes in these
//  variables and then we'll write a while loop and in this loop we put a condition that if minIndex is lesser maxIndex then we 'll get a medium Index and then check if that given number we have to find that array is > to arr[midIndex] then we 'll assign that midIndex+1 to minIndex elseIf that number is < then arr[midIndex] then we'll assign max = midIndex - 1 and if these two conditions does not match then we'll going to return that midIndex because that index itself is the index of that given which index we have to find  




function binarySearch(arr , num){
    minIndex = 0 ;
    maxIndex = arr[arr.length - 1];

    while(minIndex<=maxIndex){
        midIndex = Math.floor((minIndex+maxIndex)/2);
        // console.log("arrLength" , arr.length);
        // console.log("midIndex ==>",midIndex);
        if(arr[midIndex] < num){
            minIndex = midIndex + 1
        }else if(arr[midIndex] > num){
            maxIndex = midIndex - 1
        }else{
            return midIndex;
        }

    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,9,10,11,13,15], 7));