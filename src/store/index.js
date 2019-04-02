
import {createStore} from 'redux'
import reducer from './reducer'
let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//项目里只写一遍
console.log(store.getState())
export default store