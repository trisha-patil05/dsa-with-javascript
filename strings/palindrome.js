let prompt=require("prompt-sync")();
let s=prompt("enter a string:");
let isPalindrome=true;

let i=0, j=s.length-1;
while(i<j){
    if(s[i]!==s[j]){
        isPalindrome=false;
        break;
    }
    i++;
    j--;
}
if(isPalindrome){
    console.log("it is a palindrome");
}
else{
    console.log("it is not a palindrome");
}

