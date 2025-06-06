function buttonClick(number) {
document.getElementById('screenid').value+=number;
}

function calculator(){
    var value=document.getElementById('screenid').value;
    try{
    document.getElementById('screenid').value=eval(value);
    }
    catch{
        document.getElementById('screenid').value="Error";
    }
}
function clearScreen(){
    document.getElementById('screenid').value = "";
}
