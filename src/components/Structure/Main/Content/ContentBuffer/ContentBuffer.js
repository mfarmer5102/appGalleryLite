import React, { Component } from "react";

import ApplicationCard from "./ApplicationCard/ApplicationCard";

class ContentBuffer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <ApplicationCard/>
                    <ApplicationCard/>
                </div>
            </div>
        )  
    }

}

export default ContentBuffer;
