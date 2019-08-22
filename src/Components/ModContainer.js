import React, {Component} from 'react';
import ModBlock from './ModBlock.js'
import '../App.scss';


class ModContainer extends Component {
  state = {
    update: ""
  }

  selectedUpdate = (data) => {
    this.setState({
      update: data
    })
  }

  parseContent = (data) => {
    return data.map(update => {
      return <ModBlock update={update} selectedUpdate={this.selectedUpdate}/>
    })
  }

  render() {
    return (
      <div>
        {
          !this.state.update
          ? <div className="modal">
              <span className="close" onClick={this.props.clickedHandler}>&times;</span>
              <div className="modal-list">
                {this.parseContent(this.props.news.split('\n\n'))}
              </div>
            </div>
          : <div className="modal">
              <ModBlock update={this.state.update}/>
            </div>
        }
      </div>
    )
  }
}

export default ModContainer;
