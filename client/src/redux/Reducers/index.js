import auth from './auth';
import note from './note';
const redux = require('redux');
const rootReducer = redux.combineReducers({
    auth,
    note,
})
export default rootReducer;
