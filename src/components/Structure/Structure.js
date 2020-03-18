import React, { Component } from "react";

import LoadingScreen from "./LoadingScreen/LoadingScreen";
import Footer from "./Footer/Footer";
import Main from "./Main/Main"

let style = {
    Structure : {
        backgroundImage: `url("https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80")`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
        minHeight: "100%"
    }
};

class Structure extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={style.Structure}>
                {/* <LoadingScreen/> */}
                <Main/>
                <Footer/>
            </div>
        )  
    }

}

export default Structure;
