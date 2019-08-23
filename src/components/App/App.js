import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SongsList from '../SongsList/SongsList';

class App extends Component {
  state = {
    songsList: [],
  };

  componentDidMount() {
    console.log('MOUNTED COMPONENT');
    this.getSongs();
  }

  getSongs = () => {
    axios({
      method: 'GET',
      url: '/songs',
    })
    // axios.get('/songs')
    .then((response) => {
      console.log('GET songs: ', response);
      this.setState({
        songsList: response.data,
      });
    })
    .catch((err) => {
      console.log('GET error: ', err);
      alert('You Failed!!!');
    });
  }

  render() {
    

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Songs!</h1>
        </header>
        <br/>
        <p>Songs go here</p>
        <SongsList getSongsCallback={this.getSongs} list={this.state.songsList} />
      </div>
    );
  }
}

export default App;
