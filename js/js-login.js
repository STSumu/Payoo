console.log("button clicking file added");

document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber=document.getElementById('phn-number').value;
    const pinNumber=document.getElementById('pin').value;
    console.log(phoneNumber,pinNumber);
    console.log("button is clicked");
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log("you are logged in");
        window.location.href="home.html"
    }
    else{
        alert('Wrong phone number or pin');
    }
});
