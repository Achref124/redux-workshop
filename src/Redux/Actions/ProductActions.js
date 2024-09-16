import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../ActionTypes/ProductActionsTypes"




export const addProduct=(newProduct)=>{
    return{
        type:ADD_PRODUCT,
        payload:newProduct
    }
}

export const updateProduct=(id,newPrice)=>{
    return{
        type:UPDATE_PRODUCT,
        payload:{id,newPrice}
    }
}

export const deleteProduct=(id)=>{
    return{
        type:DELETE_PRODUCT,
        payload:id
    }
}
