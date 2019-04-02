import React, { Component } from 'react';
import store from '../store';
//store是连接reducer和action的对象
//action是一个对象，描述state的变化
//reducer定义了如何响应state的变化
class Counter extends Component {
    constructor() {
        //console.log(store.getState())
        super();
        this.state = {
            num: store.getState().counter
        }
        store.subscribe(() => {
            this.setState({
                num: store.getState().counter
            })
        })//监听store
    }
    handleAdd = () => {
        //console.log(19,store.getState())
        let action = { type: 'ADD' }
        store.dispatch(action);
        //console.log(22,store.getState())

    }
    handleDec = () => {
        let action = { type: 'DEC' }
        store.dispatch(action);
    }
    handleOdd = () => {
        if (store.getState().counter % 2 !== 0) {
            let action = { type: 'ADD' };
            store.dispatch(action);
        }
    }
    handleEven = () => {
        if (store.getState().counter % 2 === 0) {
            let action = { type: 'ADD' };
            store.dispatch(action);
        }
    }
    render() {
        return (
            <div>
                <p>
                    点击:<span>{this.state.num}</span>
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleDec}>-</button>
                    <button onClick={this.handleOdd}>奇数时+1</button>
                    <button onClick={this.handleEven}>偶数时+1</button>
                </p>
            </div>
        );
    }
}

export default Counter;
