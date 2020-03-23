import React, { Component } from "react";

import LoadingScreen from "./LoadingScreen/LoadingScreen";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main"

const style = {
    Structure : {
        backgroundImage: `url("https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80")`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
        minHeight: "100%",
        padding: '0px',
        overflow: 'hidden'
    }
};

class Structure extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisibleLoadingScreen: true,
            allApplicationsCount: 0
        };
    }

    removeLoadingScreen = () => {
        this.setState({
            isVisibleLoadingScreen: false
        })
    }

    updateAllApplicationsCount = (int) => {
        this.setState({
            allApplicationsCount: int || 0
        })
    }

    render = () => {
        return (
            <div className='container-fluid' style={style.Structure}>
                <LoadingScreen
                    isVisible={this.state.isVisibleLoadingScreen}
                />
                <Header/>
                <Main
                    removeLoadingScreen={this.removeLoadingScreen}
                    updateAllApplicationsCount={this.updateAllApplicationsCount}
                />
                <Footer
                    allApplicationsCount={this.state.allApplicationsCount}
                />
            </div>
        )  
    }

}

export default Structure;
