function rot13(str) {
    let alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let arr1=str.split("");
    let encoded=[];
    //console.log(arr1);

    for(let i=0; i<arr1.length; i++){
        if(arr1[i]!=" "&&alphabet.includes(arr1[i])){
                let num=alphabet.indexOf(arr1[i])+13;
            if(num>25){
                encoded[i]=alphabet[(13-(26-alphabet.indexOf(arr1[i])))];
            }
            if(num<=25){
                encoded[i]=alphabet[alphabet.indexOf(arr1[i])+13];
            }
        }else if (arr1[i]==" "){
            encoded[i]=arr1[i];
        }else {
            encoded[i]=arr1[i];
        }
    }
    let result=encoded[0];
    for(let j=1;j<encoded.length;j++){
        result+=encoded[j];
    }

    return result;
}

rot13("SERR PBQR PNZC");
