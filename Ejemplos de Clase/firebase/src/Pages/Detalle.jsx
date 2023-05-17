import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/productosService";
function Detalle() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  console.log("🚀 ~ file: Detalle.jsx:4 ~ Detalle ~ params:", id);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        // const response = await res.json()
        console.log(
          "🚀 ~ file: Productos.jsx:25 ~ request ~ response:",
          response,
          response.data()
        );
        setProducto(response.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [id]);

  const handleClick = () => {};
  if (loading) {
    return <div>Cargando ...</div>;
  }
  return (
    <div>
      <h1>{producto.title}</h1>
      <p>${producto.price}</p>
      <button onClick={handleClick}>Comprar</button>
    </div>
  );
}

export default Detalle;
