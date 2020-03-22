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
            isSelected: false
        };
    }

    componentDidMount = () => {
        this.setDefaultFlagSelections();
    }

    toggleFlagSelection = () => {
        if (this.props.name === 'Active' || this.props.name === 'Featured') {
            alert(this.state.isSelected)
        }
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

    setDefaultFlagSelections = () => {
        if (this.props.name === 'Active') {
            this.toggleFlagSelection();
        }
        if (this.props.name === 'Featured') {
            this.toggleFlagSelection();
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
