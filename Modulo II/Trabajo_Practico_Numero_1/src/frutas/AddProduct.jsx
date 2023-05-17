import { useForm } from "react-hook-form";
import { useState, useRef } from 'react'
import { createProduct } from "../services/productServices";

const AddProduct = (props)=> {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    const formRef = useRef(null);
    
    const onSubmit = (e) => {
      try {
        createProduct(e)
      } catch (e) {
        alert(e)
      }
    };
  
    const userRender = (
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <label>Producto</label>
            <input name="Nombre"{...register("Nombre", { 
              required: true
              })} />
            {errors.Nombre?.type === 'required' && <span>Este campo es requerido</span>}
        </div>
         <div><label>Descripcion</label>
            <input type="textarea" name="Descripcion" {...register("Descripcion", { required: true , minLength: 6 , maxLength: 300 })} />
            {/* errors will return when field validation fails  */}
            {errors.Descripcion?.type === 'required' && <span>Este campo es requerido</span>}
            {errors.Descripcion?.type === 'minLength' && <span>La descripcion debe tener como minimo 6 caracteres</span> }
            {errors.Descripcion?.type === 'maxLength' && <span>La descripcion debe tener como maximo 300 caracteres</span> }
          </div>
          <div>
            <label>Precio</label>
            <input type="number" name="Precio" {...register("Precio", { required: true , min: 0 })} />
            {/* errors will return when field validation fails  */}
            {errors.Precio?.type === 'required' && <span>Este campo es requerido</span>}
            {errors.Precio?.type === 'min' && <span>El Precio debe ser mayor que cero</span> }
          </div>
          <div>
            <label>Unidad</label>
              <input name="Unidad"{...register("Unidad", { 
                required: true
                })} />
              {errors.Unidad?.type === 'required' && <span>Este campo es requerido</span>}
          </div>
          <div>
            <label>SKU</label>
              <input name="SKU"{...register("SKU", { 
                required: true
                })} />
              {errors.SKU?.type === 'required' && <span>Este campo es requerido</span>}
          </div>
          <div><label>Stock</label>
            <input type="number" name="Stock" {...register("Stock", { required: true , min: 0 })} />
            {/* errors will return when field validation fails  */}
            {errors.Stock?.type === 'required' && <span>Este campo es requerido</span>}
            {errors.Stock?.type === 'min' && <span>El Stock debe ser mayor que cero</span> }
          </div>
          <div>
            <label>Ruta</label>
              <input name="Ruta"{...register("Ruta", { 
                required: true
                })} />
              {errors.Ruta?.type === 'required' && <span>Este campo es requerido</span>}
          </div>
          {/* include validation with required or other standard HTML validation rules */}

          <input type="submit" className="filled" value='Guardar'/>
        
      </form>
    )
              
    return (
      <div className="formContainer">
          {userRender}
      </div>
    );
  }         

export default AddProduct;