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
            <div className='bg-secondary shadow' style={style.Footer}>
                Showing X of {this.props.allApplicationsCount} items
            </div>
        )  
    }

}

export default Footer;
