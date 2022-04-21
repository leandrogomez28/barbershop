export const initialState = {
    barberos:[],
    servicios:[],
    productos:[],
  
    user:null,
    
}

export const actionType={
    BARBEROSDB:"BARBEROSDB",
    SERVICIOSDB:"SERVICIOSDB",
    PRODUCTOSDB:"PRODUCTOSDB",
    
    USER:"USER",
    
}

const reducer=(state,action)=> {
    console.log(action)
    switch(action.type){
        case "SERVICIOSDB":
            return{
                ...state,
                servicios:action.servicios,
               
            }
            case "BARBEROSDB":
                return{
                    ...state,
                    barberos:action.barberos,
                   
                }
                case "PRODUCTOSDB":
                    return{
                        ...state,
                        productos:action.productos,
                       
                    }

            case "USER":
                return{
                    ...state,
                    user:action.user
                
                }

           
        default:return state
        }
}

export default reducer;
