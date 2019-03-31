import React, { Component } from 'react';
import store from '../store';

class TodoList extends Component {
    constructor() {
        //console.log(store.getState())
        super();
        this.state = {
            list: store.getState().todos.list
        }
        store.subscribe(() => {
            this.setState({
                list: store.getState().todos.list
            })
        })//监听store
    }
    handleAdd = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            store.dispatch({
                type: 'add_item',
                value: e.target.value
            })
            e.target.value = ''
            //console.log(store.getState())

        }
        //console.log(store.getState())

    };
    del = (i) => {
        console.log(i)
        store.dispatch({
            type: 'del_item',
            idx: i
        })

    }
    change=(i)=>{
        store.dispatch({
            type: 'change_done',
            idx:i
        })
    }
    render() {
        //console.log(27,this.state.list)
        return (
            <div>
                TodoList:<input onKeyDown={this.handleAdd} type="text" /><br />
                未完成：<ul>
                    {
                        this.state.list.map((item, index) => {
                            if (!item.done) {
                                return (
                                    <li key={index}>
                                        <input  type='checkbox' onClick={this.change.bind(this,index)} />
                                        {item.val}
                                        <button onClick={this.del.bind(this, index)}>delete</button>
                                    </li>
                                )
                            }
                        })
                    }
                    </ul>
                    已完成：<ul>
                        {
                            this.state.list.map((item, index) => {
                                if (item.done) {
                                    return (
                                        <li key={index}>
                                            <input checked readOnly type='checkbox' onClick={this.change.bind(this,index)} />
                                            {item.val}
                                            <button onClick={this.del.bind(this, index)}>delete</button>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
            </div>
                );
            }
        }
        
        export default TodoList;
