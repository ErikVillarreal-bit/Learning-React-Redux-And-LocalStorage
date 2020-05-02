import { createStore } from 'redux'; //Creamos el SOTORE
import { SAVE_OPETATION,CALCULATE } from '../actions/actions';
import { saveOperation,calculate } from '../reducer/reducer';

const reducer = (state,action) => {
    switch(action.type){
        case SAVE_OPETATION:
            return saveOperation(state,action);
        case CALCULATE :
            return calculate(state,action);
        default: return state    
    }
}
const initialState = {
    operation: [],
    result: 0
}

export default createStore(reducer,initialState);