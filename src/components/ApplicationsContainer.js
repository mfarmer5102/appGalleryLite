import React, { Component } from "react";
import AppsSection from "./AppsSection";

class ApplicationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseRecords: []
    };
  }

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch() {
    let root = "https://central-api-flask-cm6ud432ka-uc.a.run.app";
    let url = root + "/AppGalleryLite/api/applications";
    fetch(url)
      .then(response => response.json())
      .then(response => {
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
