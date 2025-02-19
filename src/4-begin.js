class PaymentError extends Error{
    constructor(code, message){
        super(message);
        this.name = "PaymentError"
        this.code = code; // insufficient_funds, invalid_card, etc
        const codeMessageMap = {
            'insufficient_funds': 'You do not have enough funds to complete this payment',
            'invalid_card': 'The card number you entered is invalid'
        }
        this.userMessage = codeMessageMap[code] || "An error occurred with your payment"
    }
}

function makePayment(){
    // in real life application make a call to a payment gateway/API
    const availableFunds = 50;
    const payment = 60;
    if(transaction.payment > availableFunds){
        throw new PaymentError('insufficient_funds', `User tried to pay ${payment} with available funds ${availableFunds}`);
    }
    return 'payment_successful';
}

try{
    makePayment()
}catch(err){
    if(err instanceof PaymentError){
        if(err.code === 'insufficient_funds'){
            alert(err.userMessage)
            console.log(err.message);
        }
        if(err.code === 'invalid_card'){
            // highlight card number input with red border
            // and show message about invalid card below the input
        }
    }else{
        alert('Something went wrong! Please contact support')
        console.log(err.message);
    }
    
}