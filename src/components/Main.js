import React, { Component } from "react";

import ApplicationsContainer from "./ApplicationsContainer";
import Keyword from "./Keyword";
import Banner from "./banner.jpg";

var sidepanelStyle = {
};

var sectionLeft = {
    padding: "0px",
    overflow: "scroll",
    maxHeight: "100vh"
};

var sectionRight = {
    overflow: "scroll",
    maxHeight: "100vh"
}

var bannerStyle = {
    width: "100%"
};

var maxHeight100 = {
    maxHeight: '100%'
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseReceivedFromApi: false,
      totalClicks: 0,
      subComponentVisibilityToggler: {
        Applications: true
      },
      keywordsArray: [],
      activeKeywords: [],
      activeProperties: {
          isFeatured: true,
          isCollaboration: false,
          supportStatus: '',
          applicationType: ''
      }
    };
    this.grabKeywordsFromDatabase = this.grabKeywordsFromDatabase.bind(this);
    this.pullInKeywordName = this.pullInKeywordName.bind(this);
  }

  componentWillMount() {
    this.grabKeywordsFromDatabase();
  }

  grabKeywordsFromDatabase() {
    let root = "https://central-api-flask-cm6ud432ka-uc.a.run.app";
    let url = root + "/AppGalleryLite/api/keywords";
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          keywordsArray: response,
          responseReceivedFromApi: true
        });
      });
  }

  pullInKeywordName(arg) {
    var activeKeywords = this.state.activeKeywords;
    console.log(activeKeywords);
    var isAlreadyInArray = activeKeywords.includes(arg);
    console.log(isAlreadyInArray);
    if (isAlreadyInArray) {
      let updatedArray = activeKeywords.filter(item => {
        return item !== arg;
      });
      console.log(updatedArray);
      this.setState({ activeKeywords: updatedArray });
    } else {
      let updatedArray = activeKeywords.concat(arg);
      console.log(updatedArray);
      this.setState({ activeKeywords: updatedArray });
    }
  }

  render() {
    let allKeywords = this.state.keywordsArray.map((keyword, i) => (
      <Keyword
        key={'keyword' + i}
        keywordName={keyword.name}
        type={keyword.type}
        passKeywordNameToParent={this.pullInKeywordName}
      />
    ));

    //Define tag groups
    let languages = allKeywords.filter(item => item.props.type === "language");
    let deployments = allKeywords.filter(item => item.props.type === "deployment");
    let libraries = allKeywords.filter(item => item.props.type === "library");
    let frontEndFrameworks = allKeywords.filter(item => item.props.type === "front-end-framework");
    let backEndFrameworks = allKeywords.filter(item => item.props.type === "back-end-framework");
    let databases = allKeywords.filter(item => item.props.type === "database");
    let orms = allKeywords.filter(item => item.props.type === "orm");
    let otherTechnologies = allKeywords.filter(item => item.props.type === "other");

    if (this.state.responseReceivedFromApi) {
        return (
          <main className="container-fluid">
            <div className="row">

              {/* Column */}
              <section
                className="col-md-3 bg-light text-dark shadow"
                style={sectionLeft}
              >
                <nav style={sidepanelStyle}>
                  <div>
                    <img src={Banner} style={bannerStyle}></img>
                  </div>
                  <div className="p-4">

                    {/* <div className="mb-4">
                      Flags
                      <hr></hr>
                      {languages}
                    </div>

                    <div className="mb-4">
                      Application Type
                      <hr></hr>
                      {languages}
                    </div>

                    <div className="mb-4">
                      Support Status
                      <hr></hr>
                      {languages}
                    </div> */}

                    <div className="mb-4">
                      Languages
                      <hr></hr>
                      {languages}
                    </div>

                    <div className="mb-4">
                      Deployments
                      <hr></hr>
                      {deployments}
                    </div>

                    <div className="mb-4">
                      Libraries
                      <hr></hr>
                      {libraries}
                    </div>

                    <div className="mb-4">
                      Front-End Frameworks
                      <hr></hr>
                      {frontEndFrameworks}
                    </div>

                    <div className="mb-4">
                      Back-End Frameworks
                      <hr></hr>
                      {backEndFrameworks}
                    </div>

                    <div className="mb-4">
                      Databases
                      <hr></hr>
                      {databases}
                    </div>

                    <div className="mb-4">
                      ORMs
                      <hr></hr>
                      {orms}
                    </div>

                    <div className="mb-4">
                      Other Technologies
                      <hr></hr>
                      {otherTechnologies}
                    </div>

                  </div>
                </nav>
              </section>
              
              {/* Column */}
              <section className="col-md-9 col-sm-12 p-3" style={sectionRight}>
                <ApplicationsContainer
                  activeKeywords={this.state.activeKeywords}
                  activeProperties={this.state.activeProperties}
                  visibility={this.state.subComponentVisibilityToggler.Applications}
                ></ApplicationsContainer>
              </section>

            </div>
          </main>
        )
      }
      else {
        return (
            <div className='position-fixed'>
                <div id='pseudoCover'>
                    <section className='opacity-1'>
                        <div class='row'>
                          <div id='pseudoCoverSpinnger' class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                        </div>
                        <br/>
                        <div class='row text-center'>
                          <div class='text-light'>Loading application gallery. This may take a few seconds.</div>
                        </div>
                    </section>
                </div>
            </div>
        )
      }
  }
}

export default Main;
