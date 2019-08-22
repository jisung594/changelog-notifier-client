import React, {Component} from 'react';
import '../App.scss';

class Navbar extends Component {
  render() {

    return (
      <div className="navbar">
        <div className="navbar-column-1">
          <h2>Changelog Notifier</h2>
        </div>

        <div className="navbar-column-2">
          <span id="notification"></span>
          <img
            id="avatar"
            src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2019/03/avatar-publicity_still-h_2019.jpg"
            // onClick={() => {return modal ? modal.style.display = "block": null}}
            alt="profile"
            onClick={this.props.closeHandler}
          />
        </div>
      </div>
    )
  }
}

export default Navbar
