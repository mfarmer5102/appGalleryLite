import React, { Component } from "react";

const style = {
    Keyword: {
        cursor: "pointer",
        display: "block"
    }
}

class Keyword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        };
    }

    toggleKeywordSelection = () => {
        if (this.state.isSelected) {
            this.setState({
                isSelected: false
            }, function() {
                this.props.updateSelectedKeywords(this.props.data.name);
            })
        }
        else {
            this.setState({
                isSelected: true
            }, function() {
                this.props.updateSelectedKeywords(this.props.data.name);
            })
        }
    }

    render = () => {
        let checkIcon = this.state.isSelected ? "far fa-check-square" : "far fa-square";
        return (
            <div 
                style={style.Keyword} 
                onClick={this.toggleKeywordSelection}
            >
                <span className='badge text-left'>
                    <i className={checkIcon}></i>
                    <span className='pl-2'>{this.props.data.name}</span>
                </span>
            </div>
        );

    }

}

export default Keyword;
