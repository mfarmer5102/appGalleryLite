import React, { Component } from "react";

let style = {
    Footer: {
        height: '30px',
        width: '100vw',
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
            <div className='bg-light shadow' style={style.Footer}>
                Footer
            </div>
        )  
    }

}

export default Footer;
