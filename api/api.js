function validation(){
    const inputObj = document.getElementById("id");

    if(inputObj.validity.rangeOverflow){
        inputObj.setCustomValidity("You have made a range underfow error!");
    }else if(inputObj.validity.rangeUnderfl){
        inputObj.setCustomValidity("You have made a range underflow error!");
    }else if(inputObj.validity.valueMissing){
        inputObj.setCustomValidity("Value missing!");
    }

    if(!inputObj.checkValidity()){
        document.getElementById("demo").innerHTML = inputObj.validationMessage;
    }
}