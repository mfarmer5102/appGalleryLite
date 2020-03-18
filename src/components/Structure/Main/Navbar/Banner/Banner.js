import React, { Component } from "react";

import BannerImage from "./banner.jpg";

let style = {
    Banner: {
        width: '100%'
    }
}

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <img src={BannerImage} style={style.Banner}/>
            </div>
        )  
    }

}

export default Banner;
