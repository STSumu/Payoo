

// get to the add-money-btn button and add a EventListener 
document.getElementById('add-money-btn').addEventListener('click',function(event){

    // prevent the forms defaults 
    event.preventDefault();

    // get the amount and the pin 
    const addedMoney=document.getElementById('add-money').value;
    const pinNum=document.getElementById('pin').value ;

    // varify pin 
    if(pinNum === '1234'){

        // get the balance 
        const balance=document.getElementById('balance').innerText;

        // addmoney to the current balance by converting them in float 
        const newBalance=(parseFloat(addedMoney)+parseFloat(balance));

        // console.log(newBalance);
        // update the balance in dom 
        document.getElementById('balance').innerText=newBalance;
    }
    else{
        alert('Failed to add money!Please try again.');
    }
});


// get to the cash out button and add a EventListener 
document.getElementById('cash-out-btn').addEventListener('click',function(event){

    // prevent the forms defaults 
    event.preventDefault();

    // get the amount and the pin 
    const cashMoney=document.getElementById('cash-amount').value;
    const cashPin=document.getElementById('cash-pin').value ;

    // varify pin 
    if(cashPin === '1234'){

        // get the balance 
        const balance=document.getElementById('balance').innerText;

        // addmoney to the current balance by converting them in float 
        const newBalance=(parseFloat(balance)-parseFloat(cashMoney));

        // console.log(newBalance);
        // update the balance in dom 
        document.getElementById('balance').innerText=newBalance;
    }
    else{
        alert('Failed to add money!Please try again.');
    }
});