import { createStore } from "redux";
import ProductReducer from "../Reducers/ProductReducer";



const store=createStore(ProductReducer)

export default store