import React, { Component } from 'react';
import Camera from 'react-camera';
import { Button} from "tabler-react";

const style = {
  preview: {
    position: 'relative',
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '100%',
  }
};

export default class CameraPage extends Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
    this.state = {
      cameraType : 'back',
      mirrorMode : false
    }
  }

  takePicture() {
    this.camera.capture()
    .then(blob => {
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
    })
  }

  changeCameraType() {
    console.log("camera switch");
    if (this.state.cameraType === 'back') {
      this.setState({
        cameraType: 'front',
        mirror: true
      });
    } else {
      this.setState({
        cameraType: 'back',
        mirror: false
      });
    }
  }

  render() {
    return (
      <div style={style.container}>
      <Button
            block={true}
            color="secondary"
            onPress={this.changeCameraType.bind(this)}
        >
        Switch Camera
        </Button>
        <Camera
          type={this.state.cameraType} 
          mirrorImage={this.state.mirrorMode}
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
        <div style={style.captureContainer} onClick={this.takePicture}>
          <div style={style.captureButton} />
        </div>
        </Camera>
        <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
          alt=""
        />
      </div>
    );
  }
}

