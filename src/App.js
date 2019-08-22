import React, {Component} from 'react';
import Navbar from './Components/Navbar.js'
import MainContainer from './Components/MainContainer.js'
import ModContainer from './Components/ModContainer.js'
import './App.scss';


class App extends Component {
  state = {
    news: "",
    close: false
  }

  componentDidMount() {
    fetch("http://localhost:4000/release-notes")
      .then(res => res.json())
      .then(data => this.setState({
        news: data.files["release-notes.md"].content
      }))
  }

  closeHandler = (event) => {
    this.setState({
      close: !this.state.close
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar news={this.state.news} closeHandler={this.closeHandler}/>
        <MainContainer news={this.state.news}/>
        {
          this.state.close
          ? <ModContainer news={this.state.news} closeHandler={this.closeHandler}/>
          : null
        }
      </div>
    );
  }
}

export default App;
