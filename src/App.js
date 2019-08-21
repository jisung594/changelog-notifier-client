import React, {Component} from 'react';
import Navbar from './Components/Navbar.js'
import MainContainer from './Components/MainContainer.js'
import './App.css';


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
    console.log(this.state.news.split("\n"))
    return (
      <div className="App">
        <Navbar/>
        <MainContainer/>
      </div>
    );
  }
}

export default App;