import{GET_PRODUCTS_INIT} from "../types/types"

const store ={products:[],
}

const ProductsReducer = (state=store, action) => {
  
  switch(action.type){
  case GET_PRODUCTS_INIT:
    return action.payload

    default:
    return state
}


}

export default ProductsReducer