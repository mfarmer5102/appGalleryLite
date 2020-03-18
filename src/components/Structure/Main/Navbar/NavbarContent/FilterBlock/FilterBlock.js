import React, { Component } from "react";

import Keyword from "./Keyword/Keyword";

class FilterBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='mb-4'>
                Filter Block Header
                <hr/>
                <Keyword/>
                <Keyword/>
            </div>
        )  
    }

}

export default FilterBlock;
