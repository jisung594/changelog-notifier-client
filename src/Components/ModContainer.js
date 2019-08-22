import React, {Component} from 'react';
import ModBlock from './ModBlock.js'
import '../App.scss';


class ModContainer extends Component {
  state = {
    back: false,
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

  backHandler = () => {
    this.setState({
      back: !this.state.back,
      update: ""
    })
  }

  render() {
    return (
      <div>
        {
          (!this.state.update && !this.state.back) || !this.state.update
          ? <div className="modal">
              <span className="close" onClick={this.props.closeHandler}>&times;</span>
              <div className="modal-list">
                {this.parseContent(this.props.news.split('\n\n'))}
              </div>
            </div>
          : <div className="modal">
              <span className="back" onClick={this.backHandler}>&#8592;</span>
              <div className="modal-list">
                <ModBlock update={this.state.update}/>
              </div>
            </div>
        }
      </div>
    )
  }
}

export default ModContainer;
