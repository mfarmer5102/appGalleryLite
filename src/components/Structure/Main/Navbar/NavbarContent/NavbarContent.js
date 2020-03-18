import React, { Component } from "react";

import FilterBlock from "./FilterBlock/FilterBlock";

class NavbarContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='p-4'>
                <FilterBlock/>
                <FilterBlock/>
            </div>
        )  
    }

}

export default NavbarContent;
