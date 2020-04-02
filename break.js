
// practice break 
const nums = [1,2,3,4,5];

for(let i = 0; i < nums.length; i++){

    

    if(nums[i]>3){

        break;
    }
    console.log(nums[i]);
}


// Practice continue 

const Number = [1,2,3,4,5,6,7,8,9,-1,-3,-4];

for(let i = 0; i < Number.length; i++){
    if(Number[i] < 0){
        continue;
    }
    console.log(Number[i]);
}