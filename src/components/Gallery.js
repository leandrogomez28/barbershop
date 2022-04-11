import React from "react";
import { useState } from "react";
import Photos from "./Photos.js";

export default function Gallery() {
  const [items, setItems] = useState(Photos);

  const filterItem = (job) => {
    const updatedItems = Photos.filter((typejob) => {
      return typejob.name === job;
    });

    setItems(updatedItems);
  };

  return (
    <div>
      <h1 className="mt-5 text-center main-heading">
        Aca podras observar el resultado de los oficios que dia a dia, nuestra
        comunidad pone la mejor onda y todo su empeño.{" "}
      </h1>
      <h2>¡Que lo disfrutes!</h2>

      <div className="menu-tabs container">
        <div className="menu tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Manicura")}
          >
            Manicura
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Pedicura")}
          >
            Pedicura
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Tratamiento-Cabello-Dama")}
          >
            Tratamiento-Cabello-Dama
          </button>
          <button className="btn btn-warning" onClick={() => setItems(Photos)}>
            Mostrar todo
          </button>
        </div>
      </div>

      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => (
                <div className="item1 col-12 col -md-6 col-lg-6 col-xl-4">
                  <div className="row Item-inside">
                    <div className="col-12 col-d-12 col-lg-4 img-div">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/gallery/${elem.image}`
                        }
                        alt={elem.name}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
