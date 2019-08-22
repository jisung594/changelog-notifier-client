import React, {Component} from 'react';
import Navbar from './Components/Navbar.js'
import MainContainer from './Components/MainContainer.js'
import ModContainer from './Components/ModContainer.js'
import './App.scss';


class App extends Component {
  state = {
    news: "",
    clicked: false
  }

  componentDidMount() {
    fetch("http://localhost:4000/release-notes")
      .then(res => res.json())
      // .then(data => console.log(data.files["release-notes.md"].content))
      .then(data => this.setState({
        news: data.files["release-notes.md"].content
      }))
  }

  clickedHandler = (event) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar news={this.state.news} clickedHandler={this.clickedHandler}/>
        <MainContainer news={this.state.news}/>
        {
          this.state.clicked
          ? <ModContainer news={this.state.news} clickedHandler={this.clickedHandler}/>
          : null
        }
      </div>
    );
  }
}

export default App;
