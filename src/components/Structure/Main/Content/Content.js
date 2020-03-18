import React, { Component } from "react";

import ContentBuffer from "./ContentBuffer/ContentBuffer";

let style = {
    Content: {
        overflow: "scroll",
        maxHeight: "100vh"
    }
}

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="col-md-9 col-sm-12 p-3" style={style.Content}>
                <ContentBuffer/>
            </div>
        )  
    }

}

export default Content;
