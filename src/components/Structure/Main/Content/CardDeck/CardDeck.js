import React, { Component } from "react";

import ApplicationCard from "./ApplicationCard/ApplicationCard";

let style = {
    subMessage: {
        "fontSize": "14px"
    }
}

class CardDeck extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    determineCardRelevanceKeywords = (applicationKeywords, selectedKeywords) => {
        let litmus = true;

        for (let i = 0; i < selectedKeywords.length; i++) {
            if (!applicationKeywords.includes(selectedKeywords[i])) {
                litmus = false;
            }
        }
        
        return litmus;
    }

    determineCardRelevanceFlags = (application, selectedFlags) => {

        let litmus = true;

        let applicationFlags = [];

        switch (application.isFeatured) {
            case true:
                applicationFlags.push('Featured')
                break;
        }

        switch (application.isCollaboration) {
            case true:
                applicationFlags.push('Collaboration')
                break;
            case false:
                applicationFlags.push('Independently Created')
                break;
        }

        switch (application.supportStatus) {
            case 'active':
                applicationFlags.push('Active')
                break;
            case 'inactive':
                applicationFlags.push('Inactive')
                break;
            case 'discontinued':
                applicationFlags.push('Discontinued')
                break;
        }

        switch (application.applicationType) {
            case 'client-side':
                applicationFlags.push('Client-Side')
                break;
            case 'server-side':
                applicationFlags.push('Server-Side')
                break;
            case 'unified':
                applicationFlags.push('Unified')
                break;
        }

        for (let i = 0; i < selectedFlags.length; i++) {
            if (!applicationFlags.includes(selectedFlags[i])) {
                litmus = false;
            }
        }

        return litmus;

    }

    render() {

        let cardsArrayActive = [];
        let cardsArrayInactive = [];
        let cardsArrayDiscontinued = [];

        let relevantApplicationsCount = 0;

        for (let i = 0; i < this.props.allApplications.length; i++) {
            var thisApp = this.props.allApplications[i];
            if (this.determineCardRelevanceKeywords(thisApp.keywords, this.props.selectedKeywords) && this.determineCardRelevanceFlags(thisApp, this.props.selectedFlags)) {
                relevantApplicationsCount += 1;

                switch (thisApp.supportStatus) {
                    case 'active':
                        cardsArrayActive.push(
                            <ApplicationCard
                                data={this.props.allApplications[i]}
                                key={'app' + i} 
                            />
                        )
                        break;
                    case 'inactive':
                        cardsArrayInactive.push(
                            <ApplicationCard
                                data={this.props.allApplications[i]}
                                key={'app' + i} 
                            />
                        )
                        break;
                    case 'discontinued':
                        cardsArrayDiscontinued.push(
                            <ApplicationCard
                                data={this.props.allApplications[i]}
                                key={'app' + i}
                                opacity={0.45}
                            />
                        )
                        break;
                }

            }
        }

        return (
            <div className='container mb-5'>
                <div className='text-right'><small>Showing {relevantApplicationsCount} of {this.props.allApplications.length} applications</small></div>
                <br/>
                <div className='row'>

                    {/* Actively Supported Apps */}
                    <div className='col-12 mt-3'>
                        <span><h5>Actively Supported</h5></span>
                        <i style={style.subMessage}>These apps are maintained on a regular basis or have been created recently.</i><hr/>
                    </div>
                    {cardsArrayActive.length ? cardsArrayActive : <small className='pl-3 mb-3'>No actively supported apps meet the provided filter criteria.</small>}
                    
                    {/* Inactively Supported Apps */}
                    <div className='col-12 mt-3'>
                        <span><h5>Inactively Supported</h5></span>
                        <i style={style.subMessage}>These apps are no longer regularly maintained but still worth checking out.</i><hr/>
                    </div>
                    {cardsArrayInactive.length ? cardsArrayInactive : <small className='pl-3 mb-3'>No inactively supported apps meet the provided filter criteria.</small>}
                    
                    {/* Discontinued Apps */}
                    <div className='col-12 mt-3'>
                        <span><h5>Discontinued</h5></span>
                        <i style={style.subMessage}>These apps may no longer function and/or contain inferior quality code.</i><hr/>
                    </div>
                    {cardsArrayDiscontinued.length ? cardsArrayDiscontinued : <small className='pl-3 mb-3'>No discontinued apps meet the provided filter criteria.</small>}
                
                </div>
            </div>
        )  
    }

}

export default CardDeck;
