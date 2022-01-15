import React, { Component } from "react";
import axios from 'axios';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
        <div className="up-down-edit">
          <div className="upload-pic-area">
            <img src={this.state.image} />
            <input type="file" name="myImage" onChange={this.onImageChange} />
            <a href="/edit"><button type="button"  id="submit">Upload image</button></a>
          </div>
        </div>
      </div>
    );
  }
}
export default Upload;