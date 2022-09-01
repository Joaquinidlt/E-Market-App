import {SET_SHIPPINGDATA} from './const.js';

export default function cartShipping(payload){
        return {
            type: SET_SHIPPINGDATA,
            payload
        }
}