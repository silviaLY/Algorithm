
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

//最经典的快速排序的实现
/**
 * quickSort 对原数组进行修改的最原始的方法
 * @param arr 原数组
 * @param start 左指针
 * @param end 右指针
 */
/
function quickSort(arr,start,end){
    if((end-start) <= 1){
        return console.log(arr);
    }
    else{
        var left = start;
        var right = end;
        var center = start;
        var pivot = arr[start];
        while(left<right){
            while(arr[left]<=pivot){
                left++;
                if(left === end)
                    break;
            }
            while(arr[right]>=pivot){
                right--;
                if(right ===start)
                    break;
            }
            if(left>=right)
                break;
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
        arr[center] = arr[right];
        arr[right] = pivot;
        // console.log(arr,'left='+left,'right='+right,start,end);
        quickSort(arr,start,right-1);
        quickSort(arr,right+1,end);
    }
}
var arr1 = [4,1,2,6,3,2,7];
console.log(quickSort(arr1,0,arr1.length-1));

