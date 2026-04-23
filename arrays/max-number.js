let arr= [12, 43, 738, 3627, 28, 9];
let max=arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }   
}
console.log(max);