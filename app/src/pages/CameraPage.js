import React, { Component } from "react";
import { Page, Icon, Grid, GalleryCard, Button } from "tabler-react";
import update from "immutability-helper";
import API from "../api.js";
import Loader from "react-loader-spinner";

class CameraPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: [],
      persistedImages: [],
      featureID: -1,
      houseID: -1,
      isLoaded: false
    };
  }

  componentDidMount() {
    let url = window.location.href;
    let index = url.search("images/(\\d+)");
    let feature = url.substring(index);
    index = url.search("inspect/(\\d+)");
    let house = url.substring(index);
    this.setState(
      {
        featureID: feature.match(/\d+/g)[0],
        houseID: house.match(/\d+/g)[0]
      },
      () => {
        this.getSavedPhotos();
      }
    );
  }

  selectPhoto = event => {
    let img = [];
    Array.from(event.target.files).forEach(file => {
      if (file.type.match("image.*")) {
        img = [
          ...img,
          {
            imgObject: file,
            src: URL.createObjectURL(file)
          }
        ];
      }
    });
    this.setState({
      selectedImage: this.state.selectedImage.concat(img)
    });
  };

  removePhoto = item => {
    const { selectedImage } = this.state;
    let index = selectedImage.indexOf(item);
    if (index > -1) {
      const newArray = update(selectedImage, {
        $splice: [[index, 1]]
      });
      this.setState({ selectedImage: newArray });
    }
  };

  removeSavedPhoto = item => {
    const { persistedImages } = this.state;
    let index = persistedImages.indexOf(item);
    if (index > -1) {
      const newArray = update(persistedImages, {
        $splice: [[index, 1]]
      });
      let imageName = item.substring(
        item.lastIndexOf("/") + 1,
        item.lastIndexOf("?")
      );
      API.deleteImage(this.state.featureID, imageName);
      this.setState({ persistedImages: newArray });
    }
  };

  uploadPhotos = () => {
    const fd = new FormData();
    if(this.state.selectedImage.length>0){
      this.state.selectedImage.forEach((image, key) => {
        fd.append("image", image.imgObject, image.imgObject.name);
      });
      API.postImage(fd, this.state.featureID);
    }
    this.props.history.push({
      pathname: "/inspect/" + this.state.houseID, 
      state: { house: this.props.location.state.house }
    });
  };

  getSavedPhotos = () => {
    API.getImages(this.state.featureID).then(response => {
      if (response === "" || response === undefined || response === null) {
        this.setState(
          {
            persistedImages: [],
            isLoaded: true
          },
          () => {
            console.log(this.state.persistedImages);
          }
        );
      } else {
        this.setState({
          persistedImages: response,
          isLoaded: true
        });
      }
    });
  };

  render() {
    return (
      <Page.Content>
        <input
          className="hidden"
          type="file"
          accept="image/*"
          multiple
          onChange={this.selectPhoto}
          ref={fileInput => (this.fileInput = fileInput)}
        />
        <div className="d-flex">
          <Button color="secondary" onClick={() => this.fileInput.click()}>
            Add Photo
          </Button>
          <Button
            color="primary"
            className="ml-auto"
            onClick={this.uploadPhotos}
          >
            Confirm
          </Button>
        </div>
        <Button.List className="mt-4" />
        <Grid.Row className="row-cards">
          {this.state.selectedImage.map((item, key) => (
            <Grid.Col width={12} lg={4} key={key}>
              <GalleryCard>
                <a onClick={() => this.removePhoto(item)}>
                  <Icon name="x" />
                </a>
                <GalleryCard.Image src={item.src} alt={`Pic`} />
              </GalleryCard>
            </Grid.Col>
          ))}
        </Grid.Row>
        {this.state.isLoaded ? (
          <Grid.Row className="row-cards">
            {this.state.persistedImages.map((item, key) => (
              <Grid.Col width={12} lg={4} key={key}>
                <GalleryCard>
                  <a onClick={() => this.removeSavedPhoto(item)}>
                    <Icon name="x" />
                  </a>
                  <GalleryCard.Image src={item} alt={`Pic`} />
                </GalleryCard>
              </Grid.Col>
            ))}
          </Grid.Row>
        ) : (
          <div className="btn-list text-center">
            <Loader type="ThreeDots" color="#316CBE" height={30} width={30} />
          </div>
        )}
      </Page.Content>
    );
  }
}

export default CameraPage;
