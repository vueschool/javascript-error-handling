
// Reference Error - when you try to use a variable that is not yet declared
try{
    function hello(){
        const test = "hello";
    }
    console.log(test)
}catch(err){
    console.log(err); // ReferenceError: test is not defined
}

// RangeError - when you try to use a value that is out of a valid numeric range
// try{
//     "hello".repeat(-1); // RangeError: Invalid count value: -1
// }catch(error){
//     console.log(error)
// }

// RangeError - when you try to use a value that is out of a valid numeric range
// try{
//     // another range error example
//     const array = new Array(-1); // RangeError: Invalid array length
// }catch(error){
//     console.log(error)
// }

// Syntax Error - when you have something that cannot be parsed in terms of syntax
// try{
//     if(true === true){
//         console.log("true")
//     }
// }catch(error){
//     console.log(error); // SyntaxError: Unexpected token '{'
// }

// Type Error - when the types (number, string and so on) you are
//  trying to use or access are incompatible
// try{
//     const number = 12;
//     number.padStart(3, "0"); // TypeError: number.padStart is not a function
// }catch(error){
//     console.log(error);
// }

// Type Error - when you assign a value to an object 
// property or variable that cannot be changed
// try{
//     const hello = "world";
//     hello = "something else"
// }catch(error){
//     console.log(error);
// }

// Type Error - when you try to access a 
// property of an object that does not exist
try{
    const post = undefined;
    console.log(post.title); // Cannot read properties of null (reading 'title')
}catch(error){
    console.log(error);
}

