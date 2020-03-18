import React, { Component } from "react";

import Content from "./Content/Content";
import Navbar from "./Navbar/Navbar"

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='container-fluid full-height'>
                <div className='row full-height'>
                    <Navbar/>
                    <Content/>
                </div>
            </div>
        )  
    }

}

export default Main;
