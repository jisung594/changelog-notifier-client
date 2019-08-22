import React, {Component} from 'react';
import Navbar from './Components/Navbar.js'
import MainContainer from './Components/MainContainer.js'
import './App.scss';


class App extends Component {
  state = {
    news: ""
  }

  componentDidMount() {
    fetch("http://localhost:4000/release-notes")
      .then(res => res.json())
      // .then(data => console.log(data.files["release-notes.md"].content))
      .then(data => this.setState({
        news: data.files["release-notes.md"].content
      }))
  }

  render() {
    // console.log(this.state.news.split("\n"))
    return (
      <div className="App">
        <Navbar news={this.state.news}/>
        <MainContainer news={this.state.news}/>
      </div>
    );
  }
}

export default App;
