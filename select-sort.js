//选择排序算法
//思想：每次从原始数组中找到最小的元素存入新数组，从而形成有序数组
/**
 *
 * @param arr 要进行排序的数组
 */
function findSmallest(arr){
    var smallest = arr[0];
    var smallestIndex = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex
}

function selectionSort(arr){
    var newArr = [];
    var len = arr.length;
    for(var i=0;i<len;i++){
        var smallestIndex = findSmallest(arr);
        newArr.push(arr[smallestIndex]);
        arr.splice(smallestIndex,1);
    }
    return newArr;
}

console.log(selectionSort([2,4,1,3,2]));