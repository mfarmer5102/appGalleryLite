import React, { Component } from "react";

const style = {
    Button: {
        width: '100%'
    }
}
class ClearFiltersButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {

        let isNotFiltering = !this.props.selectedKeywords.length && !this.props.selectedFlags.length;
        let filterCount = isNotFiltering ? `` : `(${this.props.selectedKeywords.length + this.props.selectedFlags.length})`;

        return (
            <div className='mb-4'>
                <button 
                    className='btn btn-info' 
                    style={style.Button}
                    onClick={this.props.clearAllFilters}
                    disabled={isNotFiltering}
                >
                    <span className='p-1'>Clear Filters</span>
                    <span className='p-1'>{filterCount}</span>
                </button>
            </div>
        )  
    }

}

export default ClearFiltersButton;
