function Test(){
    fetch(`http://localhost:9291/test_payment`)
    .then((res)=>res.json())
    .then((obj)=>console.log("Test",obj))
}

export default Test