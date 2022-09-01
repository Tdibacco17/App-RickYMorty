import Carrusel1 from "../../Imagenes/Carrusel1.png"
import "./Carousel-module.css"

export default function Carrusel() {
    return (
        <div>
            <img className="ImagenCarrusel" src={Carrusel1} alt="Imagen Rick Y Morty" />
        </div>
    );
}