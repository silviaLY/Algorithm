//最经典的快速排序的实现
function quickSort(arr,start,end){
    if((end-start) <= 1){
        return arr;
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
        console.log(arr,'left='+left,'right='+right,start,end);
        quickSort(arr,0,right-1);
        quickSort(arr,right+1,arr.length-1);
    }
}
var arr1 = [4,1,2,6,3,2,7];
console.log(quickSort(arr1,0,arr1.length-1));