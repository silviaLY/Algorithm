//二分查找
/**
 * binary_search
 * @param list 有序数组
 * @param item 要查找的元素
 * @returns 元素位置
 */
function binary_search(list,item){
    var low = 0;
    var high = list.length-1;
    while(low <= high){
        var mid = (low+high);
        var guess = list[mid];
        if(guess === item)
            return mid;
        if(guess > item)
            high = mid-1;
        else
            low = mid+1;
    }
    return('None');
}
list = [1,3,5,7,9];
console.log(binary_search(list,3));