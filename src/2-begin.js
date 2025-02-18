try{
    throw new Error("User not found")
}catch(error){
    // handle error gracefully
    console.log(error.message)
}finally{
    console.log("this code runs no matter what")
}

console.log("The program continues")