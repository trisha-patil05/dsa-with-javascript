/**
 * ⏱️ Time : O(log n) | 🧠 Space : O(1)
 * =============================================
 */

let arr=[2, 4, 7, 15, 22, 45, 57, 68, 79, 80]
let index= binarySearch(arr, 0, arr.length, 79)
if(index==-1) console.log("not found");
else console.log("target is found at "+ index +" index");

function binarySearch(arr, first, last, target){
    while(first<=last){
        let mid=Math.floor((first+last)/2)
        if(arr[mid]==target) return mid
        else if(arr[mid]>target) last=mid+1
        else first=mid-1
    }
    return 1;

}