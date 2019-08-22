import React, {Component} from 'react';
import ListBlock from './ListBlock.js'
import '../App.scss';

class MainContainer extends Component {
  parseContent = (data) => {
    return data.map(update => {
      return <ListBlock update={update}/>
    })
  }

  render() {
      return (
        <div className="main-container">
          {this.parseContent(this.props.news.split('\n\n'))}
        </div>
      )
  }
}

export default MainContainer
