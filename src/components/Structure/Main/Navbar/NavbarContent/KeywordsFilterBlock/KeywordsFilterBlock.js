import React, { Component } from "react";

import Keyword from "./Keyword/Keyword";

class KeywordsFilterBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        let keywordsArray = [];

        this.props.allKeywords.filter((item, i) => {
            if (item.type === this.props.type){
                keywordsArray.push(
                    <Keyword
                        key={'keyword' + i} 
                        data={item}
                        updateSelectedKeywords={this.props.updateSelectedKeywords}
                        selectedKeywords={this.props.selectedKeywords}
                    />
                )
            }
        });


        return (
            <div className='mb-4'>
                {this.props.label}
                <hr/>
                {keywordsArray}
            </div>
        )  
    }

}

export default KeywordsFilterBlock;
