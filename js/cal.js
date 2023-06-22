var allnumber=$("#display");
function c_num(number){
    var preImputNumber=allnumber.val();
    allnumber.val(preImputNumber+number);
}

function clearButon(){
    allnumber.val('');
}
function calculat(){
    var result= eval(allnumber.val());
    allnumber.val(result);
}

function deletNumber(){
    var dele=allnumber.val();
    if(dele!=''){
        allnumber.val(allnumber.val().slice(0,-1));
    }
}