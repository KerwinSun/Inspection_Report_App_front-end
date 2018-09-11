import React, { Component } from 'react'; 
import {Button} from "tabler-react";
//import axios from "axios";
 
class CameraPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedImage: []
    }
  }
  
  selectPhoto = event => {
    this.setState({
      selectedImage: [...this.state.selectedImage, event.target.files[0]]
    });
    //console.log(event.target.files[0]);
    console.log(event.target.files[0]);
  }   

  uploadPhotos = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedImage, this.state.selectedImage.name);
    console.log(this.state.selectedImage);  
    //https://www.youtube.com/watch?v=XeiOnkEI7XI
    //axios.post()
  }

  displaySelectedPhotos(){
    var photos="";
    for (let i = 0; i < this.state.selectedImage.length; i++) {
      photos=photos+this.state.selectedImage[i].name+"\n";
    }
    return photos;
  }

  render () {
    return (
      <div className="App">
        <input 
          style={{display: 'none'}}
          type="file" 
          accept="image/*"
          capture="camera"
          onChange={this.selectPhoto}  
          ref={fileInput => this.fileInput = fileInput}
        />
        <Button onClick={() => this.fileInput.click()}>Add Photo</Button>
        <Button onClick={this.uploadPhotos}>Confirm</Button>
        <div>
          {typeof this.state.selectedImage !== 'undefined' && this.state.selectedImage.length === 0 ? null :
          <div>
            <p>{this.displaySelectedPhotos()}</p>
          </div>}
        </div>
      </div>
    );
  }
}
export default CameraPage;
