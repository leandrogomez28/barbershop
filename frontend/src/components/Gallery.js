import React from "react";
import { useState } from "react";
import Photos from "./Photos.js";
import { SRLWrapper } from "simple-react-lightbox";
import '../App.css'

const options = {
  settings: {
    overlayColor: "rgb(197 195 187)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: "black",
    iconColor: "rgba(126, 172, 139, 0.8)",
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
  progressBar: {
    height: "20px",
    fillColor: "blue",
    backgroundColor: "white",

  },


};

const classes = {

  buttons: {
    backgroundColor: "red",
    iconColor: "rgba(126, 172, 139, 0.8)",
  },

}

export default function Gallery() {
  const [items, setItems] = useState(Photos);

  const filterItem = (job) => {
    const updatedItems = Photos.filter((typejob) => {
      return typejob.name === job;
    });

    setItems(updatedItems);
  };

  return (
    <div className="body2">
      
      <div className="Galery">
        <h1 className=" text-center main-heading">
          Aca podras observar los distintos servicios que ofrecemos en sus respectivos oficios. Nuestra
          comunidad pone la mejor onda y empeño para hacerlas realidad.{" "}
        </h1>
        <h2 className="mt-5 text-center main-head">¡Disfruta el recorrido!</h2>
      
        <div className="menu-tabs ">
          <div className="tags menu-tab d-flex justify-content-around">
            <button className="tag" onClick={() => filterItem("Barberia")} >
              Barberia
            </button>
            /
      
            <button className="tag" onClick={() => filterItem("Manicura")}>
              Manicura
            </button>
            /
            <button className="tag" onClick={() => filterItem("Pedicura")}>
              Pedicura
            </button>
            /
            <button
              className="tag"
              onClick={() => filterItem("Cortes de Cabello/Con Navaja")}
            >
              Cortes de Cabello/Con Navaja
            </button>
            /
            <button className="tag" onClick={() => setItems(Photos)}>
              Mostrar todo
            </button>
          </div>
        </div>
        <div>
          <SRLWrapper options={options}>
            <div className="container2" >
              {items.map(img => (
                <div key={img.id} className="image-card" >
                  <a href={`gallery/Todos/${img.image}`
                  }>
                    <img className="image" src={
                      process.env.PUBLIC_URL +
                      `gallery/Todos/${img.image}`
                    } alt="" />
                  </a>
                </div>
              ))}
            </div>
      
          </SRLWrapper >
        </div>
      </div>
    </div>
  );
}
// {
//   id: '24',
//   name: 'y',
//   image:
//     '',
// },
