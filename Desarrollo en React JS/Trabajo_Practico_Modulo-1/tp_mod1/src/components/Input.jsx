const Input = (props)=> {
    return <div>
            <label>{props.inputName}</label>
            <input type={props.type} placeholder={props.inputName}></input>
           </div>
   }         

export default Input;