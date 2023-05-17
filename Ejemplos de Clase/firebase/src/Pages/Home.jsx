//Componente tipo funcion
import Productos from "../Components/Productos";

import home from "./home.module.css";

function Home() {
  return (
    <div>
      <div className={home.carousel}>Home</div>
      <div>Home</div>
      <Productos />
    </div>
  );
}

export default Home;
