




// ❌ don't swallow errors!
try{
    throw new Error('error');
}catch(e){
    // "I'll fix it later" (but later never comes)
    // "The error isn't important" (but how do you know?)
    // "I don't want the program to crash" (there are better ways!)
}












// ✅ handle errors properly
// using strategies we've learned throughout the course
try{
    throw new Error('error');
}catch(e){
    // log the error to a reporting service
    // show a user-friendly message
    // retry the operation
    // re-throw the error with additional context
    // wrap the error in a custom error type
    // etc.
}