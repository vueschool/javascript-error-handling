class PaymentError extends Error{
    codeMessageMap = {
        'insufficient_funds': 'You do not have enough funds to complete this payment',
        'invalid_card': 'The card number you entered is invalid',
        'card_expired': 'The card you entered has expired',
        'fraudulent_activity': 'Your account has been locked due to fraudulent activity',
        'unknown_error': 'An error occurred with your payment'

    }
    constructor(code, message){
        super(message);
        this.name = 'PaymentError';
        this.code = code;
        this.userMessage = this.codeMessageMap[this.code] || this.codeMessageMap.unknown_error
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
    makePayment();
}catch(error){
    if(error instanceof PaymentError){
        if(error.code === 'insufficient_funds'){
            // show user message about insufficient funds
        }
        if(error.code === 'invalid_card'){
            // highlight card number input with red border
            // and show message about invalid card below the input
        }
        alert(error.userMessage);
        console.log(error.message)
    }else{
        alert('An unknown error occurred. Please contact support');
    }
}
