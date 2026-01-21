import actions from "./action";

const initialState = {
    loading : false,
    error : null,
    getProducts : [],
};

const ekkaEcommerceReducer = (state = initialState , action) =>{
    switch(action.type){
        case actions.GET_PRODUCT_START:{
            return{
                ...state,
                loading : true,
            }
        };
        case actions.GET_PRODUCT_SUCCESS:{
            return{
                ...state,
                loading : false,
                getProducts : action.payload,
            }
        };
        case actions.GET_PRODUCT_FAILURE:{
            return{
                ...state,
                loading : false,
            }
        }
        default:
            return state;
    }
} 

export default ekkaEcommerceReducer;