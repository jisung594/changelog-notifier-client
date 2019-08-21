import React, {Component} from 'react';
import '../App.css';

class MainContainer extends Component {


  render() {
    let parseContent = (data) => {
      return data.map(line => {
        if (line.includes("### ")) {
          let newLine = line.replace("### ", "")
          return <h4>{newLine}</h4>
        } else if (line.includes("## ")) {
          let newLine = line.replace("## ", "")
          return <h3>{newLine}</h3>
        } else if (line.includes("# ")) {
          let newLine = line.replace("# ", "")
          return <h2>{newLine}</h2>
        } else {
          return <p>{line}</p>
        }
      })
    }
      return (
        <div>
          <h2>main container</h2>
          {parseContent(this.props.news.split('\n'))}
        </div>
      )
  }
}

export default MainContainer
