import React, { useState } from "react";
import { useStateValue } from "../StateProvider"
import { MdRemoveShoppingCart,MdAddShoppingCart } from 'react-icons/md'
import { Link as LinkRouter } from 'react-router-dom';

import './carritoshop.css'
import Carshop from '../imagenes/carshop.png'
import CantidadCarrito from "./CantidadCarrito";

function CarritoShop(props) {
    const [{ user }, dispatch] = useStateValue()
    console.log(props);

    console.log(user);

    return (
        <div>
            {user ?
              <div>
                    <div className="carrito-shop">
                        <LinkRouter to='carrito'>
                            <img src={Carshop} />
                            <button type="button" class="btn btn-primary carrito-user">
                                <MdAddShoppingCart/>
                                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </button>
                        </LinkRouter>
                    </div>
                    
              </div>
                :
                <div>
                    <div>
                        <div className="carrito-shop">
                            <img src={Carshop} />
                    
                        </div>
                        <div className="icon-carrito" title="primero iniciar sesion">
                            <MdRemoveShoppingCart />
                        </div>
                    </div>
                    <CantidadCarrito/>
                </div>
            }
        </div>

    )
}
export default CarritoShop;