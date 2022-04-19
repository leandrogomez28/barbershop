export const initialState = {
    barberos:[],
    servicios:[],
  
    user:null,
    
}

export const actionType={
    BARBEROSDB:"BARBEROSDB",
    SERVICIOSDB:"SERVICIOSDB",
    
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

            case "USER":
                return{
                    ...state,
                    user:action.user
                
                }

           
        default:return state
        }
}

export default reducer;
