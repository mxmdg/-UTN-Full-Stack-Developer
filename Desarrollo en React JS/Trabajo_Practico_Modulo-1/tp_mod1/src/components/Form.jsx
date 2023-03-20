import Input from './Input'
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
                title = "Usuario y contraseña"
                dataForm = Ingresar
                break;           
        default:
            break;
    }
    
    

    const typeOfInput = (inp) => {
        if (inp.type === "Select") {
            let value
            const changeHandler = (e)=>{
                e.preventDefault()
                return value=e.target.value
            }  
          return (
            <div>
                 <label>{inp.inputName}</label>
                    <select onChange={changeHandler}>
                        <option>Elija una opcion</option>
                        {inp.options.map((option) => (
                        <option value={option.value}>{option.text}</option>
                ))}
            </select>
            <div className='value' id={inp.inputName + "_id"}>{value}</div>
            </div>
            
          );
        } else {
          return <Input inputName={inp.inputName} type={inp.type}></Input>;
        }
      };

    return <div>
            <h2>Solicitud de {title}</h2>
            <form>
                {dataForm.map((inp)=> typeOfInput(inp))}
                <button id="submitBTN" type="submit">Enviar</button>
                <button id="cancelBTN" type="cancel">Cancelar</button>
            </form>
            </div>
            
} 

export default Form