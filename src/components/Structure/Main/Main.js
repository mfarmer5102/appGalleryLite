import React, { Component } from "react";

import Content from "./Content/Content";
import Navbar from "./Navbar/Navbar"

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allApplications: [],
            allKeywords: [],
            selectedKeywords: [],
            selectedFlags: []
        };
    }

    componentDidMount = () => {
        this.fetchApplicationsData();
        this.fetchKeywordsData();
    }

    fetchApplicationsData = () => {
        let url = 'https://central-api-flask-cm6ud432ka-uc.a.run.app' + "/AppGalleryLite/api/applications";
        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.props.removeLoadingScreen();
                this.props.updateAllApplicationsCount(response.length)
                this.setState({
                    allApplications: response,
                }
            );
        });
    }

    fetchKeywordsData = () => {
        let url = 'https://central-api-flask-cm6ud432ka-uc.a.run.app' + "/AppGalleryLite/api/keywords";
        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.props.removeLoadingScreen();
                this.setState({
                    allKeywords: response
                }
            );
        });
    }

    updateSelectedKeywords = (keyword) => {
        let selectedKeywords = this.state.selectedKeywords;
        let isAlreadyInArray = selectedKeywords.includes(keyword);
        if (isAlreadyInArray) {
            let updatedArray = selectedKeywords.filter(item => {
                return item !== keyword;
            });
            this.setState({ selectedKeywords: updatedArray });
        } 
        else {
            let updatedArray = selectedKeywords.concat(keyword);
            this.setState({ selectedKeywords: updatedArray });
        }
    }

    updateSelectedFlags = (flag) => {
        let selectedFlags = this.state.selectedFlags;
        if (typeof flag === 'array') {
            // Drop old flags
                // No current implementation of dropping flags via array
            // Add new flags
            let updatedArray = selectedFlags.concat(flag);
            this.setState({ selectedFlags: updatedArray });
        } 
        else {
            let isAlreadyInArray = selectedFlags.includes(flag);
            if (isAlreadyInArray) {
                let updatedArray = selectedFlags.filter(item => {
                    return item !== flag;
                });
                this.setState({ selectedFlags: updatedArray });
            } 
            else {
                let updatedArray = selectedFlags.concat(flag);
                this.setState({ selectedFlags: updatedArray });
            }
        }
    }

    render = () => {
        return (
            <div className='container-fluid full-height'>
                <div className='row full-height'>
                    <Navbar 
                        allKeywords={this.state.allKeywords}
                        updateSelectedKeywords={this.updateSelectedKeywords}
                        updateSelectedFlags={this.updateSelectedFlags}
                    />
                    <Content
                        allApplications={this.state.allApplications}
                        selectedKeywords={this.state.selectedKeywords}
                        selectedFlags={this.state.selectedFlags}
                    />
                </div>
            </div>
        )  
    }

}

export default Main;
