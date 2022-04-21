import React from "react";
import './carrito.css'
import { useCart } from "react-use-cart";
import { BsFillCartDashFill, BsCartPlusFill } from "react-icons/bs";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    updateItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <div className="Carrito-vacio">
    <h1>Tu carrito esta vacio</h1>

  </div>
    ;

  return (
    <div className="Carrito-C ">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <h1>Carrito de Compras</h1>
      <section className="py-4 container withss">
        <div className="row justify-content-center">
          <div className="col-12 mt-5">

            <table className="table table--ligth table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img className="productog" style={{ height: '10rem', width: '10rem' }} src={
                          process.env.PUBLIC_URL + `/productosGeneral/${item.imagen}`
                        } />
                        {/* <img src={item.image}
                                                style={{ height: '7rem', width: '8rem' }} /> */}
                      </td>
                      <td className="tdPad">
                        {item.nombre}
                      </td>
                      <td className="tdPad">
                        Precio {`$${item.price}`}
                      </td>
                      <td className="tdPad">
                        Cantidad ({item.quantity})
                      </td>
                      <td className="tdPad">
                        <button className=" btn-danger ms-3"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                          <BsFillCartDashFill />
                        </button>
                        <button className=" btn-success ms-3"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                          <BsCartPlusFill />
                        </button>

                      </td>
                      <td className="tdPad" >
                        <button className=" btn-danger ms-3"
                          onClick={() => removeItem(item.id)}>Remover Producto</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h5 className="">Productos ({totalUniqueItems}) Cantidad Total: ({totalItems})</h5>
          </div>
          <div className="col-auto ms-auto">
            <h2>Precio Total: ${cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button className=" btn-danger "
              onClick={emptyCart}>Vaciar Carrito</button>
          </div>
          <div className="pagar">
            <button className=" btn-danger "
             >Realizar compra</button>
          </div>

        </div>
      </section>

    </div>
  )
}
export default Cart;