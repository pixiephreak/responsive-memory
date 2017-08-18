import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term:''};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
            <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="or enter another artist here"
                  aria-describedby="basic-addon1"
                  value={this.state.term}
                  onChange={e => this.handleInputChange(e.target.value)}
                 />
            </div>
        </div>
      </div>
    )
  }

  handleInputChange(term){
    this.setState({term});
    this.props.onTermChange(term);
  }
}

export default SearchBar;
