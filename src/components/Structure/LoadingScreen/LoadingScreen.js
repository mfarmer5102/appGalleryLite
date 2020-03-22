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
    }
}

class LoadingScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={style.LoadingScreenMajor}>
                <section style={style.LoadingScreenMinor}>
                    <div class='row'>
                    <div id='pseudoCoverSpinnger' class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    </div>
                    <br/>
                    <div class='row text-center'>
                    <div class='text-light'>Loading application gallery. This may take a few seconds.</div>
                    </div>
                </section>
            </div>
        )  
    }

}

export default LoadingScreen;
