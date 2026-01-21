import { all , call , takeEvery , put } from "redux-saga/effects";
import actions from "./action";
import fbFirestore from "../../helpers/firebase/fireBase"
import {collection, getDocs , setDoc} from "firebase/firestore";



export function* getProducts(){
    try{
        console.log("come here products")
        const response = yield call(getDocs , collection(fbFirestore , 'products'));
        console.log(response)
        const data = response.docs.map((doc) => ({...doc.data()}));
        console.log(data)
        yield put({
            type:actions.GET_PRODUCT_SUCCESS,
            payload : data,
        })
    }catch(error){
        yield put({
            type:actions.GET_PRODUCT_FAILURE,
        })
    }
};

export default function* mainSaga(){
    yield all([
        takeEvery(actions.GET_PRODUCT_START , getProducts),
    ])
}