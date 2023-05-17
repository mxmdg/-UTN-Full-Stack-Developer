import { useForm } from "react-hook-form";
import { useState, useRef , useEffect} from 'react'
import { updateProduct } from "../services/productServices";
import { useParams } from "react-router-dom";
import { getProductByID } from "../services/productServices";

/* const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    const result = async () => {
      try {
        const response = await getById(id);
        setValue("title", response.data().title);
        setValue("price", response.data().price);
        setValue("thumbnail", response.data().thumbnail);
      } catch (e) {
        console.log(e);
      }
    };
    result();
  }, [id, setValue]); */




const EditProduct = (props)=> {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({ mode: "onChange" });
    const [ useNewProduct , setNewProduct ] = useState(true)
    const formRef = useRef(null);
    const { id } = useParams()
    
    const onSubmit = async (data) => {
      try {
        const item = await updateProduct(id,data)
      } catch (e) {
        alert(e)
      }
    };

    useEffect(() => {
      const result = async () => {
        try {
          const response = await getProductByID(id);
          setValue("Nombre", response.data().Nombre);
          setValue("Descripcion", response.data().Descripcion);
          setValue("Precio", response.data().Precio);
          setValue("Unidad", response.data().Unidad);
          setValue("SKU", response.data().SKU);
          setValue("Stock", response.data().Stock);
          setValue("Ruta", response.data().Ruta);
        } catch (e) {
          console.log(e);
        }
      };
      result();
    }, [id, setValue]);
 
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

export default EditProduct;