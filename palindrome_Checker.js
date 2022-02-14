function palindrome(str) {
    str=str.toLowerCase();
    let arr1=[];
    let arr2=[];
    let result=1;

    let regex=/[A-Z]|[0-9]/gi;
    arr1=str.match(regex);

    for(let i=arr1.length-1;i>=0;i--){
        arr2.push(arr1[i]);
    }

    for (let i=0; i<arr1.length; i++ ){
            if (arr1[i]!=arr2[i]){
                result--;
            }
    }

    if (result<0){
        return false;
    }

    return true;
}


palindrome("eye");
