import React, { Component } from "react";

let style = {
    Keyword: {
        cursor: "pointer",
        display: "block"
    }
}

class Keyword extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let checkIcon = this.state.isClicked ? "far fa-check-square" : "far fa-square";
        return (
            <div style={style.Keyword} onClick={this.toggleKeyword}>
                <span><i className={checkIcon}></i></span>
                <span className='badge text-left'>
                    {this.props.keywordName} Keyword Name
                </span>
            </div>
        );

    }

}

export default Keyword;
