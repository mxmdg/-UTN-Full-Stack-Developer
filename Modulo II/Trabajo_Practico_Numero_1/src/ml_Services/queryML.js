const queryML = async (search)=>{
    try {
        const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + (search)).then(res=>res.json())
        return(res.results)
    } catch(e) {
        console.log(e)
    }
}

export default queryML