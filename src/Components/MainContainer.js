import React, {Component} from 'react';
import ListBlock from './ListBlock.js'
import '../App.scss';

class MainContainer extends Component {
  render() {
    let parseContent = (data) => {
      return data.map(update => {
        return <ListBlock update={update}/>
      })
    }
      return (
        <div className="main-container">
          {parseContent(this.props.news.split('\n\n'))}
        </div>
      )
  }
}

export default MainContainer
