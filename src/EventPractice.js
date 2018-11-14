import React, { Component } from 'react';

class EventPractice extends Component {
    state={
        username: '',
        message: ''
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick=()=>{
        alert(`${this.state.username}: ${this.state.message}`);
        this.setState({
            username: '',
            message: ''
        })
    }
    handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <input type="text" name="username" value={this.state.username} placeholder="input your name" onChange={this.handleChange} />
                <input type="text" name="message" value={this.state.message} placeholder="input any message" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;