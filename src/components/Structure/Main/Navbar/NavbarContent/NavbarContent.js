import React, { Component } from "react";

import ClearFiltersButton from "./ClearFiltersButton/ClearFiltersButton";
import KeywordsFilterBlock from "./KeywordsFilterBlock/KeywordsFilterBlock";
import FlagsFilterBlock from "./FlagsFilterBlock/FlagsFilterBlock";

class NavbarContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flagsSection: [
                {
                    label: 'General Filters', 
                    items: ['Featured', 'Collaboration', 'Independently Created']
                },
                {
                    label: 'Support Status',
                    items: ['Active', 'Inactive', 'Discontinued']
                },
                {  
                    label: 'Architecture',
                    items: ['Client-Side', 'Server-Side', 'Unified']
                }
            ],
            keywordsSection: [
                {label: 'Languages', type: 'language'},
                {label: 'Libraries', type: 'library'},
                {label: 'Deployments', type: 'deployment'},
                {label: 'Back-End Frameworks', type: 'back-end-framework'},
                {label: 'Front-End Frameworks', type: 'front-end-framework'},
                {label: 'Databases', type: 'database'},
                {label: 'ORMs', type: 'orm'},
                {label: 'Other', type: 'other'}
            ]
        };
    }


    render() {
        
        let FlagsFilterBlocksArray = this.state.flagsSection.map((item, i) => (
            <FlagsFilterBlock
                label={item.label}
                items={item.items}
                key={'FlagsFilterBlock' + i} 
                updateSelectedFlags={this.props.updateSelectedFlags}
                selectedFlags={this.props.selectedFlags}
            />
        ));

        let KeywordsFilterBlocksArray = this.state.keywordsSection.map((item, i) => (
            <KeywordsFilterBlock
                label={item.label}
                type={item.type}
                key={'KeywordsFilterBlock' + i} 
                allKeywords={this.props.allKeywords}
                updateSelectedKeywords={this.props.updateSelectedKeywords}
                selectedKeywords={this.props.selectedKeywords}
            />
        ));

        return (
            <div className='p-4'>
                <ClearFiltersButton
                    clearAllFilters={this.props.clearAllFilters}
                    selectedKeywords={this.props.selectedKeywords}
                    selectedFlags={this.props.selectedFlags}
                />
                {FlagsFilterBlocksArray}
                {KeywordsFilterBlocksArray}
            </div>
        )

    }

}

export default NavbarContent;
