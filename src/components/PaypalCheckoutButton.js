
import { PayPalButtons } from "@paypal/react-paypal-js";
const PaypalCheckoutButton = (props) =>{

     console.log(props.total);

     const createOrder = (data, actions) =>{

     }


    return(
        <PayPalButtons
        style={{
            color:"silver",
            
            shape:"pill",
            tagline:false
        }}
        // createOrder={createOrder}
        // onApprove={onApprove}
        // onError= {onError}
        // onCancel= {onCancel}
        >
        </PayPalButtons>
        
        
    )
}


export default PaypalCheckoutButton;