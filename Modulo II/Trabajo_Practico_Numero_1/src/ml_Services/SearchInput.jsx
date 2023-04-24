function SearchInput(props){
    return (
        <input className='inputSearch' type='search' placeholder={props.placeholder} onBlur={props.onBlur}/>
    )
}

export default SearchInput