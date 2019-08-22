import React, {Component} from 'react';
import ModBlock from './ModBlock.js'
import '../App.scss';

class Navbar extends Component {
  render() {

    return (
      <div className="navbar">
        <div>
          <h2>Changelog Notifier</h2>
        </div>

        <div>
          <span id="notification"></span>
            <img
              id="avatar"
              src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2019/03/avatar-publicity_still-h_2019.jpg"
              // onClick={() => {return modal ? modal.style.display = "block": null}}
              alt="profile"
              onClick={this.props.clickedHandler}
            />



        </div>
      </div>
    )
  }
}

export default Navbar
