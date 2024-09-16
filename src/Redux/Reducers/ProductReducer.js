import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../ActionTypes/ProductActionsTypes"


//initial state(state initiale)
const initialState={
    listProduct:[
{id:Math.random(),name:"iphone 15",description:"etat  neuf",price:1500},
{id:Math.random(),name:"samsung",description:"etat  neuf",price:2500},
{id:Math.random(),name:"infinix",description:"etat  neuf",price:3500}
    ]
}


//pure function

const ProductReducer=(state=initialState,{type,payload})=>{

switch (type) {
    case ADD_PRODUCT :
        return{...state,listProduct:[...state.listProduct,payload]}
    case UPDATE_PRODUCT:
        return{...state,listProduct:state.listProduct.map(product=>product.id==payload.id?
            {...product,price:payload.newPrice}
            :product)}
    case DELETE_PRODUCT:
        return{...state,listProduct:state.listProduct.filter(product=>product.id!=payload)}

    default:
        return state
}

}

export default ProductReducer