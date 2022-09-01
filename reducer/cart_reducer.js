import * as actionTypes from '../actions/Cart/const.js'

const initialState={
    cartItems:[  
      {
        "_id": "6133d32f09a3918d453a99e5",
        "name": "Palta",
        "description": "Palta Hass",
        "price": 55,
        "countInStock": 128,
        "imageUrl": "https://jumboargentina.vtexassets.com/arquivos/ids/472853-600-450?width=600&height=450&aspect=true",
        "category": [
          {
            "_id": "6132cf71a6fafa3682b978ff",
            "name": "Frutas y verduras"
          }
        ],
        "featured": false,
        "discount": 0,
        "__v": 0
      },
      {
        "_id": "6133d4af09a3918d453a99fd",
        "name": "Aceite De Girasol",
        "description": "Aceite de girasol Cuisine&Co de 120gr",
        "price": 179,
        "countInStock": 15,
        "imageUrl": "https://jumboargentina.vtexassets.com/arquivos/ids/601152-800-auto?width=800&height=auto&aspect=true",
        "category": [
          {
            "_id": "6132cd9084e09f6626fcae25",
            "name": "Almacén"
          }
        ],
        "featured": false,
        "discount": 0,
        "__v": 0
      },
      {
        "_id": "6133ded609a3918d453a9a6d",
        "name": "Leche",
        "description": "Leche Uat Semidesc Melincue 1L",
        "price": 104,
        "countInStock": 150,
        "imageUrl": "https://jumboargentina.vtexassets.com/arquivos/ids/647222-800-auto?width=800&height=auto&aspect=true",
        "category": [
          {
            "_id": "6132cf90a6fafa3682b97902",
            "name": "Lácteos"
          }
        ],
        "featured": false,
        "discount": 0,
        "__v": 0
      },
      {
        "_id": "6133e03909a3918d453a9a75",
        "name": "Leche",
        "description": "Leche Uat Nutrilon Premiun 200ml",
        "price": 98,
        "countInStock": 90,
        "imageUrl": "https://jumboargentina.vtexassets.com/arquivos/ids/606981-600-450?width=600&height=450&aspect=true",
        "category": [
          {
            "_id": "6132cf90a6fafa3682b97902",
            "name": "Lácteos"
          }
        ],
        "featured": false,
        "discount": 0,
        "__v": 0
      },
      {
        "_id": "6133e13309a3918d453a9a89",
        "name": "Yogurt",
        "description": "Yogurt Bebible Frut Milkaut schx 1,250L",
        "price": 183,
        "countInStock": 130,
        "imageUrl": "https://jumboargentina.vtexassets.com/arquivos/ids/624368-800-auto?width=800&height=auto&aspect=true",
        "category": [
          {
            "_id": "6132cf90a6fafa3682b97902",
            "name": "Lácteos"
          }
        ],
        "featured": false,
        "discount": 0,
        "__v": 0
      }],
    shippingData: [],
};

export default function cartReducer(state = initialState, action){
    switch (action.type) {

        case actionTypes.ADD_TO_CART:
            const cartItems = action.payload;
            console.log('cartReducer',cartItems._id)
            const existItem = state.cartItems.find((x) => x._id === item._id);

            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i._id === item._id ? item : i),
                }
                console.log(cartItems)
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }
        
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i._id !== action.payload)
            }
        case actionTypes.SET_SHIPPINGDATA:
            return {
                ...state,
                shippingData: action.payload
            }    
        default:
            return state
        }
    }