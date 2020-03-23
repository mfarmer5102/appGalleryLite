import React, { Component } from "react";

const style = {
    Flag: {
        cursor: "pointer",
        display: "block"
    }
}

class Flag extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: this.props.selectedFlags.includes(this.props.name)
        };
    }

    toggleFlagSelection = () => {
        if (this.state.isSelected) {
            this.setState({
                isSelected: false
            }, function() {
                this.props.updateSelectedFlags(this.props.name);
            })
        }
        else {
            this.setState({
                isSelected: true,
            }, function() {
                this.props.updateSelectedFlags(this.props.name);
            })
        }
    }

    render = () => {
        let checkIcon = this.props.selectedFlags.includes(this.props.name) ? "far fa-check-square" : "far fa-square";
        return (
            <div 
                style={style.Flag} 
                onClick={this.toggleFlagSelection}
            >
                <span className='badge text-left'>
                    <i className={checkIcon}></i>
                    <span className='pl-2'>{this.props.name}</span>
                </span>
            </div>
        );
    }

}

export default Flag;
