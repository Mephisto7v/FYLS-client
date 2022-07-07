export const cartReducer = (state, action) => {
    if(action.type === "AddCart"){
        const data = state.cart.find(element => element.ProductID === action.payload.ProductID);
        if(!data){
            return{
                ...state,
                cart:[...state.cart, {...action.payload, qty : 1}]
            };
        }
        else{
            data.qty++;
            return{
                ...state,
                cart : state.cart
            };
        }
    }
    else if(action.type === "RemoveCart"){
        console.log(state.cart.filter((c)=>c.ProductID !== action.payload.ProductID));
        return{
            ...state,
            cart:state.cart.filter((c)=>c.ProductID !== action.payload.ProductID)
        };
    }
    else{
        return state;
    }
};