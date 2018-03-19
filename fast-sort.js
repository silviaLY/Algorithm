//快速排序算法
/**
 * quicksort 需要新建数组占用内存的方法
 * @param arr
 * @returns {*}
 */
function quicksort(arr){
    if(arr.length <2)
        return arr;
    else{
        var pivot = arr.shift();
        var less = [];
        var greater = [];
        for(var i=0;i<arr.length;i++){
            if(arr[i] <= pivot)
                less.push(arr[i]);
            else
                greater.push(arr[i]);
        }
        return quicksort(less).concat([pivot],quicksort(greater));
    }
}
console.log(quicksort([10,5,2,3]));
