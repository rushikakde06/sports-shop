import {combineReducers} from 'redux'
import productreducer from './Productreducer';

const rootReducer = combineReducers({
        productStore:productreducer
        
    });
    

export default rootReducer;