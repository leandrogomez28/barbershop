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
                           
                            <button type="button" class="btn btn-primary carrito-user">
                                <MdAddShoppingCart/>
                                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                   
                                </span>
                            </button>
                        </LinkRouter>
                    </div>
                    
              </div>
                :
                <div>
                    
                    <div className="carrito-shop">
                           <button type="button" class="btn btn-primary carrito-user" title="primero iniciar sesion">
                               <MdRemoveShoppingCart />
                               <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                   
                               </span>
                           </button>
                       </div>
                    
                    
                </div>
            }
        </div>

    )
}
export default CarritoShop;