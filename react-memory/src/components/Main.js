
  // Include React
import React, { Component } from "react";
import axios from 'axios';
import ListContainer from './ListContainer';
import SearchBar from './Search_bar'
import helpers from '../utils/helper'
import css from '../index.css'

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
  helpers.runQuery(term).then(function(results) {
      this.setState({ gifs: results });
    }.bind(this));
}

  render() {
    return(

      <div className = 'container'>
        {/* <!--Page Header--> */}
          <div className="page-header">
              <h1>In Memory of Prince</h1>
              <h2>The game of memory created with outstanding gifs of Prince. Click on any box to start matching.</h2>
            {/* <!--Search--> */}
            <SearchBar onTermChange={(term)=>this.gifSearch(term)}/>
          </div>
           <div className="row">
            {/* <!--List Container--> */}
            <ListContainer
                gifs = {this.state.gifs}
                onSelect = {selectedVideo => this.setState({selectedVideo})} />
           </div>

      </div>
    );
  }
}
export default Main;
