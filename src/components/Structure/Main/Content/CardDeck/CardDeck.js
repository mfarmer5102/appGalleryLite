import React, { Component } from "react";

import ApplicationCard from "./ApplicationCard/ApplicationCard";

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

        let cardsArray = [];

        for (let i = 0; i < this.props.allApplications.length; i++) {
            var thisApp = this.props.allApplications[i];
            if (
                this.determineCardRelevanceKeywords(thisApp.keywords, this.props.selectedKeywords) &&
                this.determineCardRelevanceFlags(thisApp, this.props.selectedFlags)
                ) {
                cardsArray.push(
                    <ApplicationCard
                        data={this.props.allApplications[i]}
                        key={'app' + i} 
                    />
                )
            }
        }

        return (
            <div className='container'>
                <div className='row'>
                    {cardsArray}
                </div>
            </div>
        )  
    }

}

export default CardDeck;
