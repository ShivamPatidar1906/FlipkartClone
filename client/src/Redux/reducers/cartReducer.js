import * as actionType from '../constants/cartConstants'

export const cartReducer = (state = {cartItems: []}, action) =>{

    switch(action.type){
        case actionType.ADD_TO_CART:
            const Item = action.payload;
            const exist = state.cartItems.find(product=>product.id === Item.id);
            if(exist)
            {
                return { ...state, cartItems: state.cartItems.map(data => data.product === exist.product ? Item: data)}
            }
            else
            {
                return { ...state, cartItems: [ ...state.cartItems, Item]}
            }
        case actionType.REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)}
        default:
            return state
    }

}