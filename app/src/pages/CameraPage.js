import React, { Component } from 'react';
 
class CameraPage extends Component {
  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
  }
 
  render () {
    return (
      <div className="App">
        <input type="file" accept="image/*;capture=camera"/>
      </div>
    );
  }
}
export default CameraPage;
