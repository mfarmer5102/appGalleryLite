import React, { Component } from "react";

const style = {
    Flag: {
        cursor: "pointer",
        display: "block"
    }
}

const defaultFlags = ['Active', 'Featured'];

class Flag extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: (defaultFlags.includes(this.props.name) ? true : false)
        };
    }

    componentDidMount = () => {
        this.props.updateSelectedFlags(defaultFlags)
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
        let checkIcon = this.state.isSelected ? "far fa-check-square" : "far fa-square";
        return (
            <div 
                style={style.Flag} 
                onClick={this.toggleFlagSelection}
            >
                <span className='badge text-left'>
                    <i class={checkIcon}></i>
                    <span class='pl-2'>{this.props.name}</span>
                </span>
            </div>
        );

    }

}

export default Flag;
