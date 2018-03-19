//分而治之的思想
// var arrSum = 0;
function sum(arr){
    // console.log(arr);
    let arrSum = 0;
    if(arr.length !==0){
        arrSum +=arr.shift();
        arrSum +=sum(arr);
    }
    return arrSum;
}
console.log(sum([2,4,6]));