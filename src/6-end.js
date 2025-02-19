// network error example
// try{
//     await fetch("https://sitenoexistlalalala.com")
// }
// catch(err){
//     console.log("caught network error example", err)
// }


// custom timeout example
// try{
//     await fetch("https://sitenoexistlalalala.com",{
//         signal: AbortSignal.timeout(1000)
//     })
// }catch(err){
//     console.log("caught timeout example", err)
// }

// status code example
// try{
//     const res = await fetch("https://httpbin.org/status/404")
//     if(!res.ok){
//         throw new Error('Request failed')
//     }
// }catch(err){
//     console.log("caught status code example", err)
// }


// retry example
async function fetchWithRetry(url, attempts = 3){
    while(attempts > 0){
        try{
            const res = await fetch(url)
            if(res.ok){
                return res
            }else{
                throw new Error("Network response was not ok")
            }
        }catch(err){
            attempts--;
            if(attempts === 0){
                throw err
            }
        }
    }
}

try{
    await fetchWithRetry("https://httpbin.org/status/200,500")
}catch(err){
    console.log("caught retry example", err)
}

console.log("end!")