import * as actionTypes from './const.js'
import axios from 'axios'
import URL_PRODUCTS_ID from '../../utils/utils.js'


export const addToCart= (id,qty)=> async ()=>{
    const {data}= await axios.get(`http://192.168.68.114:5000/product/${id}`)
    console.log('action/actionCart',data)
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload:{
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        }
    })
}