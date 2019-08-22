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
    let modal = document.querySelector(".modal")
    let avatar = document.querySelector("#avatar")

    return (
      <div className="navbar">
        <div>
          <h2>Changelog</h2>
        </div>

        <div>
          <span id="notification"></span>
            <img
              id="avatar"
              src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2019/03/avatar-publicity_still-h_2019.jpg"
              alt="profile"
              onClick={() => {return modal ? modal.style.display = "block": null}}
            />

            <div className="modal">
              <div>
                <span className="close" onClick={()=>{return modal ? modal.style.display = "none" : null}}>&times;</span>
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
