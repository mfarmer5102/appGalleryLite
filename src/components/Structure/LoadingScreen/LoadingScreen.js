import React, { Component } from "react";

const style = {
    LoadingScreenMajor: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        height: '100%',
        width: '100%',
        background: 'rgba(0, 0, 0, 0.671)',
        zIndex: '9999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoadingScreenMinor: {
        opacity: '1'
    },
    Spinner: {
        width: '3rem',
        height: '3rem',
        margin: 'auto'
    }
}

class LoadingScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if (!this.props.isVisible) {
            return null;
        }
        else {
            return (
                <div style={style.LoadingScreenMajor}>
                    <section style={style.LoadingScreenMinor}>
                        <div className='row'>
                        <div className="spinner-border text-primary" style={style.Spinner} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        </div>
                        <br/>
                        <div className='row text-center'>
                        <div className='text-light'>Loading application gallery. This may take a few seconds.</div>
                        </div>
                    </section>
                </div>
            ) 
        }
    }

}

export default LoadingScreen;
