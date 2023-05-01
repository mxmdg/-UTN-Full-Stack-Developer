import { useForm } from "react-hook-form";
import { useState } from 'react'

const Login = (props)=> {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [ useNewUser , setNewUser ] = useState(true)
    const [ useLogin , setLogin] = useState(false)
    const onSubmit = () => setLogin(true);
  
    console.log(watch("user")); // watch input value by passing the name of it

    const toggleUser = ()=> {
      setNewUser(!useNewUser)
    }

    const userRender = (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <label>Correo Electronico</label>
            <input name="email"{...register("email", { 
              required: true , 
              pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/gi,
              })} />
            {errors.email?.type === 'required' && <span>Este campo es requerido</span>}
            {errors.email?.type === 'pattern' && <span>ingrese una direccion de correo válida</span> }
        </div>
         <div><label>Contraseña</label>
            <input type="password" {...register("password", { required: true , minLength: 6 , maxLength: 12 })} />
            {/* errors will return when field validation fails  */}
            {errors.password?.type === 'required' && <span>Este campo es requerido</span>}
            {errors.password?.type === 'minLength' && <span>La contraseña debe tener como minimo 6 caracteres</span> }
            {errors.password?.type === 'maxLength' && <span>La contraseña debe tener como maximo 12 caracteres</span> }
          </div> 
          {/* include validation with required or other standard HTML validation rules */}
        <button onClick={toggleUser}>Registrarse</button>  
        <input type="submit" />
      </form>
    )

    const newUserRender = (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <label>Nombre</label>
            <input name="nombre"{...register("nombre", { required: true , minLength: 3})} />
            {errors.nombre?.type === 'required' && <span>Este campo es requerido</span>}
            {errors.nombre?.type === 'minLength' && <span>El nomrbe debe tener como minimo 3 caracteres</span> }
        </div>
        <div>
          <label>Apellido</label>
            <input name="apellido"{...register("apellido", { required: true , minLength: 3})} />
            {errors.apellido?.type === 'required' && <span>Este campo es requerido</span>}
            {errors.apellido?.type === 'minLength' && <span>El apellido debe tener como minimo 3 caracteres</span> }
        </div>
        <div>
          <label>Correo Electronico</label>
            <input name="email"{...register("email", { 
              required: true , 
              pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/gi,
              })} />
            {errors.email?.type === 'required' && <span>Este campo es requerido</span>}
            {errors.email?.type === 'pattern' && <span>ingrese una direccion de correo válida</span> }
        </div>
         <div><label>Contraseña</label>
            <input type="password" {...register("password", { required: true , minLength: 6 , maxLength: 12 })} />
            {/* errors will return when field validation fails  */}
            {errors.password?.type === 'required' && <span>Este campo es requerido</span>}
            {errors.password?.type === 'minLength' && <span>La contraseña debe tener como minimo 6 caracteres</span> }
            {errors.password?.type === 'maxLength' && <span>La contraseña debe tener como maximo 12 caracteres</span> }
          </div> 
          {/* include validation with required or other standard HTML validation rules */}
        <button onClick={toggleUser}>Ingresar</button>  
        <input type="submit" />
      </form>
    )
              
    return (
      useNewUser?newUserRender:userRender
    );
  }         

export default Login;