/* A number is called happy if it leads to 1 after a sequence of steps wherein each step number is replaced by the sum of squares of its digit 
that is if we start with Happy Number and keep replacing it with digits square sum, we reach 1. */


function HappyNumbers(num) {
    
    let number_Of_Digits=num.toString().length;
    let temp;
    let arr1=[];
    let result=0;
    let flag;

    for(let i=1; i<=number_Of_Digits;i++){
        if (i==1){
            temp =(num%100)%10;
            arr1.push(temp);
        }else if(i==2){temp=Math.floor((num%100)/10);
            arr1.push(temp);
        }else if(i==3){
            temp =Math.floor(num/100)%10;
            arr1.push(temp)
        }else if(i==4){
            temp =Math.floor(num/1000)%10;
            arr1.push(temp)
        }else if(i==5){
            temp =Math.floor(num/10000);
            arr1.push(temp)
        }
    }

    for (let i=0; i<arr1.length; i++){
        result+=Math.pow(arr1[i],2);
    }
    if (result==1){
        flag=true;
    }else{
        flag=false;
    }

    
    return flag;
}

// keep this function call here
HappyNumbers(1);
