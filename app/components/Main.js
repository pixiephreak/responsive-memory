
  // Include React
import React, { Component } from "react";
import axios from 'axios';
import ListContainer from './ListContainer';
import SearchBar from './Search_bar'
import helpers from '../../utils/helper'

// here is where the header and input box go
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: null,
      term:''
    };
    this.gifSearch('prince')
  }

gifSearch(term){
  helpers.runQuery(term).then(function(data) {
      console.log('data: ', data.data);
      this.setState({ gifs: data.data });
    }.bind(this));
}

  render() {
    return(

      <div className="container">
        {/* <!--Page Header--> */}
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>In Memory of Prince</h1>
              <h2>The game of memory created with outstanding gifs of Prince. Click on any box to start matching.</h2>
            </div>
            {/* <!--Search--> */}
            <SearchBar onTermChange={(term)=>this.gifSearch(term)}/>
            {/* <!--List Container--> */}
            <div className="row">
                <ListContainer
                  gifs = {this.state.gifs}
                  onSelect = {selectedVideo => this.setState({selectedVideo})} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
