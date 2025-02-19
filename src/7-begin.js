

// how to re-throw an error 101
try{
    throw new Error("original error")
}catch(err){
    throw new Error('new error with more context', {
        cause: err
    })
}



// a practical example
// function formatMoney(cents){
//     if(typeof cents !== 'number'){
//         throw TypeError('Cents must be of type number')
//     }
//     const dollars = cents / 100
//     return `$${dollars.toFixed(2)}`
// }

// function displayMoney(cents){
    
//     try{
//         document.querySelector("#money").innerText = formatMoney(cents)    
//     }catch(err){
//         if(err.message.includes('innerText')){
//             throw new Error('Div with the id of money is missing from the page', {
//                 cause: err
//             })
//         }
//         throw err;
//     }
    
// }

// displayMoney("50")

