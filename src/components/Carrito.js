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
    <>  <h1>carrito Compras</h1>
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12 mt-5">
                    <h5 className="">Cart ({totalUniqueItems}) total items: ({totalItems})</h5>
                    <table className="table table--ligth table-hover m-0">
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {/* <img src={item.image}
                                                style={{ height: '7rem', width: '8rem' }} /> */}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {`${item.price}`}
                                        </td>
                                        <td>
                                            Cantidad ({item.quantity})
                                        </td>
                                        <td>
                                            <button className="btn btn-danger ms-3"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                <BsFillCartDashFill />
                                            </button>
                                            <button className="btn btn-success ms-3"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                <BsCartPlusFill />
                                            </button>
                                            <button className="btn btn-danger ms-3"
                                                onClick={() => removeItem(item.id)}>Remover Producto</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Precio Total: ${cartTotal}</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-2"
                        onClick={emptyCart}>Vaciar Carrito</button>
                    {/* <button className="btn btn-primary">
                        <Link to="/buy">Pagar</Link>
                    </button> */}
                </div>
            </div>
        </section>

    </>
)
}
export default Cart;