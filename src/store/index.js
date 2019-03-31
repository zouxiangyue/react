
import {createStore} from 'redux'
import reducer from './reducer'
let store=createStore(reducer);//项目里只写一遍
console.log(store.getState())
export default store