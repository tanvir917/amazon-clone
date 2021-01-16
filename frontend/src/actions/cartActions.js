import { CART_ADD_ITEM } from "../constants/cartConstants";
import axios from 'axios'; 
export const addToCart = (productId, qty) => async(dispatch, getState) =>{
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          product: data._id,
          qty,
      }
    })
}
