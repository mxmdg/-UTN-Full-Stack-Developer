export const queryML = async (search)=>{
    try {
        const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + (search)).then(res=>res.json())
        return(res.results)
    } catch(e) {
        console.log(e)
    }
}

export const queryMLProduct = async (id)=>{
    try {
        const res = await fetch("https://api.mercadolibre.com/items/" + id).then(res=>res.json())
        return(res)
    } catch(e) {
        console.log(e)
    }
}

export const queryMLDescription = async (id)=>{
    try {
        const desc = await fetch("https://api.mercadolibre.com/items/" + id + "/description").then(desc=>desc.json())
        return(desc)
    } catch(e) {
        console.log(e)
    }
}