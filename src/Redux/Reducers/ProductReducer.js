import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../ActionTypes/ProductActionsTypes"


//initial state(state initiale)
const initialState={
    listProduct:[
{id:Math.random(),name:"iphone 15",description:"etat  neuf",price:1500,imgUrl:"https://inventstore.in/wp-content/uploads/2023/04/Blue-scaled.webp"},
{id:Math.random(),name:"samsung",description:"etat  neuf",price:2500,imgUrl:"https://www.samsungtunisie.tn/10443-large_default/samsung-galaxy-s24-prix-tunisie.jpg"},
{id:Math.random(),name:"infinix",description:"etat  neuf",price:3500,imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDe-YDrcChhZXKhrHBhJ6u5ygvyHXb-fEwxQ&s"}
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