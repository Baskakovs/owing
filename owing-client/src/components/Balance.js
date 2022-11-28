import '../App.css'
function Balance({balance}){
    return(
        <>
        <h1 className='justify-content-center flex'>${Math.round(balance * 100) 
            / 100}
        </h1>
        </>
    )
}

export default Balance