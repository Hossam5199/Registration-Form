var btn = document.getElementById('saveForm');
var errorSpace = document.getElementById('error-messages');
var display = document.getElementsByClassName('errors');
btn.addEventListener('click' , checkErrors);

function checkErrors(e){
    e.preventDefault();
    var name = document.getElementById('element_1').value;
    var email = document.getElementById('element_2').value;
    var password = document.getElementById('element_3').value;
    var gender = document.getElementsByClassName('radio');
    var sports = document.getElementsByClassName('checkbox');
    var sportChecked = 0;
    var country = document.getElementById('element_6').value;

    var errorMessage = "";

    if (name == ""){
        errorMessage += "<li>Name is required.</li>"
    }
    if (!email){
        errorMessage += "<li>Email is not valid.</li>"
    }
    if (password.length < 8){
        errorMessage += "<li>Password must be 8 chars at least.</li>"
    }
    if (!gender[0].checked && !gender[1].checked){
        errorMessage += "<li>Please select your gender.</li>"
    }
    for (var x=0 ; x<sports.length ; x++){
        if (sports[x].checked){
            sportChecked++;
        }
    }
    if (sportChecked < 2){
        errorMessage += "<li>Please select at least two sports.</li>"
    }
    if (!country){
        errorMessage += "<li>Please select your country.</li>"
    }
    document.getElementById("error-messages").innerHTML = errorMessage;
    if (errorMessage){
        document.getElementsByClassName("errors")[0].style.display = '';
    }
    else{
        document.getElementsByClassName("errors")[0].style.display = 'none';
    }
}