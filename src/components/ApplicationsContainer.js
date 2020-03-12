import React, { Component } from "react";
import AppsSection from "./AppsSection";

class ApplicationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseRecords: []
    };
  }

  // componentDidUpdate() {
  //   this.handleSearch();
  // }

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch() {
    let root = "https://central-api-flask-cm6ud432ka-uc.a.run.app";
    let url = root + "/AppGalleryLite/api/applications";
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({
          databaseRecords: response
        });
      });
  }

  render() {

    //Prep
    var allItems = this.state.databaseRecords;
    var activeKeywords = this.props.activeKeywords;
    var activeProperties = this.props.activeProperties;
    console.log('activeProperties', activeProperties)

    var queriedApps = allItems.filter(function(item) {
      let litmus = true;
      
      for (let i = 0; i < activeKeywords.length; i++) {
        item.keywords.push(item.isCollaboration ? 'Collaboration': null)
        item.keywords.push(item.isFeatured ? 'Featured' : null)
        item.keywords.push(item.applicationType)
        item.keywords.push(item.supportStatus)

        if (item.keywords.includes(activeKeywords[i])) {
        } else {
          litmus = false;
        }
      }

    //   if (activeProperties.applicationType) {
    //     console.log(item.applicationType === activeProperties.applicationType)
    //     if (item.applicationType === activeProperties.applicationType) {
    //         } else {
    //             return false;
    //         }
    //     }

    //     if (activeProperties.supportStatus) {
    //         console.log(item.supportStatus === activeProperties.supportStatus)
    //         if (item.supportStatus === activeProperties.supportStatus) {
    //         } else {
    //             return false;
    //         }
    //     }

    //     if (activeProperties.isCollaboration) {
    //         console.log(item.isCollaboration === activeProperties.isCollaboration)
    //         if (item.isCollaboration === activeProperties.isCollaboration) {
    //         } else {
    //             return false;
    //         }
    //     }

    //     if (activeProperties.isFeatured) {
    //         console.log(item.isFeatured === activeProperties.isFeatured)
    //         if (item.isFeatured === activeProperties.isFeatured) {
    //         } else {
    //             return false;
    //         }
    //     }
      return litmus;
    });

    //Render
    return (
      <div>
        <AppsSection sectionName="Queried Apps" data={queriedApps} resultCount={queriedApps.length}/>
      </div>
    );
  }
}

export default ApplicationsContainer;
