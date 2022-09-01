import * as actionConst from '../actions/index';

export const initialState = {
    products: [],
    clearProducts: []

};

export default function productReducer(state = initialState, action) {
    switch (action.type) {

        case actionConst.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.sort(() => {
                return Math.random() - 0.3;
                }),
                clearProducts: action.payload,
            }

        default:
            return state
    }
}