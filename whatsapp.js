// Sending Message to whatsapp
function sendToWhatsapp(){
    let number = "+266       ";

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let numbers=document.getElementById('numbers').value;
    let message=document.getElementById('message').value;

    var url = "https://wa.me/" + number + "?text=" 
    + "*Name :* " + name + "%0a"
    + "*Email :* " + email + "%0a"
    + "*Number :* " + numbers + "%0a"
    + "*Message :* " + message + "%0a%0a"

    windows.open(url, '_blank').focus();

  }