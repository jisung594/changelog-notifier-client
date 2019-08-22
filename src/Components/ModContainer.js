import React, {Component} from 'react';
import ModBlock from './ModBlock.js'
import '../App.scss';


class ModContainer extends Component {
  parseContent = (data) => {
    return data.map(update => {
      return <ModBlock update={update}/>
    })
  }

  render() {
    let modal = document.querySelector('.modal')

    return (
      <div className="modal">
        <span className="close" onClick={this.props.clickedHandler}>&times;</span>
        <div className="modal-list">
          <h2>{this.props.news.split('\n')[0].replace("# ","")}</h2>
          {this.parseContent(this.props.news.split('\n\n'))}
        </div>
      </div>
    )
  }
}

export default ModContainer;
