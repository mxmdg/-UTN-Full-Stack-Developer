import { useState } from 'react'
import * as React from "react";
import '../styles/index.css'
import { useSearchParams } from 'react-router-dom'



const SearchProductsML = ()=> {
    const [useURL , setURL] = useState('')
    const [useSearch, setSearch] = useSearchParams()

    const onChangeHandler = (e)=>{
            e.preventDefault(e)

            setURL("/SearchProductsML/")
            setSearch(e.target)
            console.log(useSearch['*'])
            window.open(useURL + useSearch , "_Self")
    }


 return (
        <div>
            <input className='inputSearch' type='search' onBlur={onChangeHandler} placeholder='Buscar'/>
        </div>
        ) 
}

export default SearchProductsML