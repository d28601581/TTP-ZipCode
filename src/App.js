import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar'
import './App.css';
import CityDetail from './components/CityDetail';

class App extends React.Component {
  state = { cityDetail: [] }
  onSearchSubmit = async (term) => {
    const response = await axios.get(`https://ctp-zip-api.herokuapp.com/zip/${term}`);
    this.setState({ cityDetail: response.data })
    
  }
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <CityDetail cityDetail = {this.state.cityDetail}/>
      </div>
    );
  }
}

export default App;
