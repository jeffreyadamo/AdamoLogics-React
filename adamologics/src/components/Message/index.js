import React, { Component } from "react";
import "./style.css";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'My full stack play space on the internet'
        }
    }

    changeMessage() {
        this.setState({
            message: "You are the change"
        })
    }

render() {
    return (
        <div>
            <hr />
            <h4 className='domine'>{this.state.message}</h4>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.changeMessage()}>Click for change</button>
            <hr />
        </div>

    )
}
}

export default Message