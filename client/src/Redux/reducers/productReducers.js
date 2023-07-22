
import * as actionType from '../constants/productConstants'


export const getProductsReducer = (state = { products : []}, action) =>{
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return { products : action.payload}
        case actionType.GET_PRODUCTS_FAILURE:
            return { error : action.payload}
        default:
            return state
    }
}

export const getProductDetailsReducer = ( state = { products : {}}, action) =>{
    switch(action.type){
        case actionType.GET_PRODUCTS_DETAILS_REQUEST:
            return {loading: true}
        case actionType.GET_PRODUCTS_DETAILS_SUCCESS:
            return {loading: false, products: action.payload}
        case actionType.GET_PRODUCTS_DETAILS_FAILURE:
            return {loading: false, error: action.payload}
        case actionType.GET_PRODUCTS_DETAILS_RESET:
            return {product:{}}
        default:
            return state
    }
}
