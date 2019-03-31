import { combineReducers } from "redux";

function counter(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return ++state;
        case 'DEC':
            return --state;
        default:
            return state;
    }
}

let initValue = {
    list: [{ val: 1, done: false }]
}
function todos(state = initValue, action) {
    switch (action.type) {
        case 'add_item':
            var newState = JSON.parse(JSON.stringify(state))//相当于深拷贝
            //let obj=Object.assign({},state,{a:100})
            newState.list.push({ val: action.value, done: false });
            return newState;
        case 'del_item':
            var newState = JSON.parse(JSON.stringify(state))//相当于深拷贝
            //let obj=Object.assign({},state,{a:100})
            newState.list.splice(action.idx, 1);
            return newState;
        case 'change_done':
            var newState = JSON.parse(JSON.stringify(state))//相当于深拷贝
            //let obj=Object.assign({},state,{a:100})
            newState.list[action.idx].done=!newState.list[action.idx].done
            return newState;
        default:
            return state;
    }
}
export default combineReducers({ todos, counter }) //将两个reducer合并