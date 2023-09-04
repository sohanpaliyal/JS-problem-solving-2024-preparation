
// the absolute diagonal difference

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix array is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is 15 - 17 = 2.

const arr = [ [1, 2 ,3] 
            , [4, 5, 6] 
            , [9, 8, 9]  ]

function getDif(arr){
    
    let x = 0 ;
    let y = 0;
    let length = arr.length -1
    for (let i = 0; i < arr.length; i++) {
        x+=arr[i][i];
        y+=arr[i][length];
        length--;
    }
    return Math.abs(x- y);
    
}


console.log( "getDif(arr) " , getDif(arr))