import React, { Component } from "react";

import Flag from "./Flag/Flag";

class FlagsFilterBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

         let flagsArray = this.props.items.map((item, i) => {
             return (
                <Flag
                    key={'flag' + i}
                    name={item}
                    updateSelectedFlags={this.props.updateSelectedFlags}
                />
             )
        });


        return (
            <div className='mb-4'>
                {this.props.label}
                <hr/>
                {flagsArray}
            </div>
        )  
    }

}

export default FlagsFilterBlock;
