function findPivot(arr, first, last) {
    let pivot= arr[first];
    let i=first+1, j=last;

    while(i<=j){
        while(i<last && arr[i]<=pivot) i++;
        while(j>first && arr[j]>pivot) j--;

        if(i<j){
            swap(arr, i, j);
        }
    }
    swap(arr, first, j);
    return j;
}

function quickSort(arr, first, last){
    if(first>=last) return;
    let pIdx=findPivot(arr, first, last);
    quickSort(arr, first, pIdx-1);
    quickSort(arr, pIdx+1, last);
}

function swap(arr, i, j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;    
}

let arr = [1, 20, 13, 7, 8, 5, 10]
quickSort(arr, 0, arr.length-1);
console.log(arr)    