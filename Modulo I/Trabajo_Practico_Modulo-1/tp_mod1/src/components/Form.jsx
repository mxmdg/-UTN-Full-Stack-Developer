import Input from './Input'
import Select from './Select'
import Button from './Button'
import Register from './Register'
import Seg_Auto from './Seg_Auto'
import Seg_Vida from './Seg_Vida'
import Seg_Hogar from './Seg_Hogar'
import Ingresar from './Ingresar'

const Form = (props)=> {

    let dataForm = props.form
    let title

    switch (dataForm) {
        case "Register":
            title = "Registro"
            dataForm = Register
            break;
        case "Seg_Auto":
            title = "Seguro Automotor"
             dataForm = Seg_Auto
            break;    
        case "Seg_Vida":
            title = "Seguro de vida"
            dataForm = Seg_Vida
            break;
        case "Seg_Hogar": 
            title = "Seguro para el Hogar"
            dataForm = Seg_Hogar
            break;
        case "Ingresar": 
                title = "Credenciales"
                dataForm = Ingresar
                break;           
        default: 
                title = "Credenciales"
                dataForm = Ingresar
                break; 
            break;
    }
    
    

    const typeOfInput = (inp) => {
        if (inp.type === "Select") {
            let value
            const changeHandler = (e)=>{
                e.preventDefault()
                return value=e.target.value
            }  
          return <Select inputName={inp.inputName} type={inp.type} value={value} changeHandler={changeHandler} options={inp.options}></Select>
        } else if (inp.type === "button"){
            return <Button inputName={inp.inputName} type={inp.type} selectForm={props.selectForm} id={"Register"}></Button>
        } else {
          return <Input inputName={inp.inputName} type={inp.type}></Input>;
        }
      };

    return <div>
            <div className={"close_btn"} onClick={props.resetForms}><p>X</p></div>
            <h2>Solicitar {title}</h2>
            <form>
                {dataForm.map((inp)=> typeOfInput(inp))}
                <button id="submitBTN" type="submit">Enviar</button>
                <button id="cancelBTN" type="cancel">Cancelar</button>                
            </form>
            </div>
            
} 

export default Form