// Problem Statement 1 
// if you take a look on binary tree from left or right then what nodes can you see from there 
// we'll going to use recursion for this problem we'll go to the each level in the binary tree and push all the ids in an array which will be stored into a globel object with the key of  each level number     
// and it is as simple as that if we are watching any binary tree from left then we'll going to see only those nodes which are available in each level array's first index    
// and if we watching from right side then it will going to each level's last index 


const binaryTree = {
    id : 1,
    left : {
        id : 2 ,
        left: {
            id : 4,
            left:{id : 8},
            right : { id : 9}
        },
        right : {
            id : 5,
            left:{ id : 10 },
            right : { id : 11 }
        }
    },
    right : {
        id : 3,
        left:{
            id: 6
        },
        right : {
            id : 7
        }
    }
}

const allNodes  = {};

const getAllNodes = (obj , level , eyeSide) => {

    allNodes[level] !== undefined ?  allNodes[level].push(obj.id) : allNodes[level] =  [obj.id];
    if(obj.left){
        level+=1
        getAllNodes(obj.left , level);
    }

    if(obj.right){
        level+=1
        getAllNodes(obj.right , level);
    }


  

}
getAllNodes(binaryTree,0);

const nodeWithSide = (side) => {
    
    for (const key in allNodes) {
        if (Object.hasOwnProperty.call(allNodes, key)) {
            if(side ==='left')
                console.log("from left side visible all nodes ==>",allNodes[key][0]);
            else
                console.log("from right side visible all nodes ==>",allNodes[key][allNodes[key].length - 1]);
            
        }
    }
}

nodeWithSide('left');
nodeWithSide('right');

// console.log(allNodes);