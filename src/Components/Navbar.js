import React, {Component} from 'react';
import ModBlock from './ModBlock.js'
import '../App.scss';

class Navbar extends Component {
  parseContent = (data) => {
    return data.map(update => {
      return <ModBlock update={update}/>
    })
  }

  render() {
      return (
        <div className="navbar">
          <div>
            <h2>Changelog</h2>
          </div>

          <div>
            <span id="notification"></span>
            <img src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2019/03/avatar-publicity_still-h_2019.jpg" alt="profile"/>

            <div className="modal">
              <div>
                <span className="close">&times;</span>
                <div className="modal-list">
                  {this.parseContent(this.props.news.split('\n\n'))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )
  }
}

export default Navbar
