import React, { Component } from "react";

const style = {
    Header: {
        height: '30px',
        width: '100%',
        position: 'fixed',
        top: '0px',
        left: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(#e0e0e0, #cfcfcf)',
        fontWeight: '100'
    }
}

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={style.Header}></div>
        )  
    }

}

export default Header;
