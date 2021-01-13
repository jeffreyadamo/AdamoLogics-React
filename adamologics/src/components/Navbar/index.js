import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mode: false,
            backgroundURL: ""
        }
    }

    partyTime() {
        if (this.state.mode === false){         
            this.setState({
                mode: true,
                backgroundURL: 'https://media.giphy.com/media/lPAaLdlvicAMJWn5L4/giphy.gif'
            },
            () => {
                console.log("party mode on")
            })
        } else if (this.state.mode === true){
            this.setState({
                mode: false,
                backgroundURL: ""
            },
            () => {
                console.log("party mode off")
            })
        }
    }


render() {
    return (
        <div 
            className="navbar container-fluid" 
            style={{ 
             backgroundImage:`url(${this.state.backgroundURL})`}}
        >
            <div className="col-sm-12 col-md-12 col-lg-4">
                <h1 className="title">ADAMOLOGICS</h1>
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-4 left">
                {this.props.navMessage}
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-4 custom-control custom-switch right">
                <input
                type="checkbox"
                className="custom-control-input"
                id="partySwitch"
                onChange={() => this.partyTime()}
                ></input>
                <label className="custom-control-label" for="partySwitch">
                Party Mode
                </label>
            </div>
        </div>
    );
}   
};

export default NavBar;
