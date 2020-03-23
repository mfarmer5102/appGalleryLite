import React, { Component } from "react";

const style = {
    Footer: {
        height: '30px',
        width: '100vw',
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(#e0e0e0, #cfcfcf)',
        fontWeight: '100'
    }
}

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={style.Footer}></div>
        )  
    }

}

export default Footer;
