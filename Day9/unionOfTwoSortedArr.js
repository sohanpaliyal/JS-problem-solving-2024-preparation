
function findUnionOfSortedArrays(arr1, arr2) {
   union = [];
   i = 0;
   j = 0;
   while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            if(!union.length || union[union.length - 1]!== arr1[i]){
                union.push(arr1[i]);
            }
            i++;
        }else if(arr1[i] > arr2[j]){
            if(!union.length || union[union.length - 1]!== arr2[j]){
                union.push(arr2[j]);
            }
            j++;
        }else{
            if(!union.length || union[union.length - 1]!== arr2[j]){
                union.push(arr2[j]);
            }
            j++;
            i++;
        }
   }
//    console.log("will go to second  while loop",i < arr1.length , i , j)
   while(i < arr1.length){
    // console.log("arr1[i] , arr2[j] second loop first iteration ==>",arr1[i] , arr2[j])
    //    if(arr1[i] < arr2[j]){
           if(!union.length || union[union.length - 1]!== arr1[i]){
               union.push(arr1[i]);
            }
            i++;
        }
    // }
    // console.log("union ==>",union)

   while(j < arr2.length){
    // if(arr1[i] > arr2[j]){
        if(!union.length || union[union.length - 1]!== arr2[j]){
            union.push(arr2[j]);
        }
        j++;
    // }
   }

   return union;
}
  
  // Example usage:
  const arr1 = [1,1,1,1, 3, 4, 5, 7];
  const arr2 = [2, 3, 5, 6];
  const unionArray = findUnionOfSortedArrays(arr1, arr2);
  console.log(unionArray); // Output: [1, 2, 3, 4, 5, 6, 7]