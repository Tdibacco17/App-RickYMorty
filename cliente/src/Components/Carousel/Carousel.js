// import Carousel from 'react-bootstrap/Carousel';
import Carrusel1 from "../../Imagenes/Carrusel1.png"
import "./Carousel-module.css"

export default function Carrusel() {
    return (
        <div>
            <img className="ImagenCarrusel" src={Carrusel1} alt="Imagen Rick Y Morty" />
        </div>
        // <Carousel>
        //     <Carousel.Item interval={1000}>
        //         <img className="ImagenCarrusel" src={Carrusel1} alt="Imagen Rick Y Morty" />
        //     </Carousel.Item>
        //     {/* <Carousel.Item interval={500}>
        //         <img className="ImagenCarrusel" src={Carrusel1} alt="Imagen Rick Y Morty" />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img className="ImagenCarrusel" src={Carrusel1} alt="Imagen Rick Y Morty" />
        //     </Carousel.Item> */}
        // </Carousel>
    );
}