import React, { Component } from "react";
import { Page, Icon, Grid, GalleryCard, Button } from "tabler-react";
import update from "immutability-helper";
import API from "../api.js";

class CameraPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: [],
      persistedImages: [""],
      featureID: -1
    };
  }
  componentDidMount() {
    let url = window.location.href;
    let index = url.search("images/(\\d+)");
    url = url.substring(index);
    this.setState(
      {
        featureID: url.match(/\d+/g)[0]
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

  uploadPhotos = () => {
    const fd = new FormData();
    this.state.selectedImage.forEach((image, key) => {
      fd.append("image", image.imgObject, image.imgObject.name);
    });
    API.postImage(fd, this.state.featureID);
  };

  getSavedPhotos = () => {
    API.getImages(this.state.featureID).then(response => {
      console.log(response);
      if (response === "") {
        console.log('NULLLLLL');
        this.setState(
          {
            persistedImages: []
          },
          () => {
            console.log(this.state.persistedImages);
          }
        );
      } else {
                console.log('NOt     NULLLLLL');
        this.setState({
          persistedImages: response
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
        <div>
          <br />
        </div>
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
        <Grid.Row className="row-cards">
          {this.state.persistedImages.map((item, key) => (
            <Grid.Col width={12} lg={4} key={key}>
              <GalleryCard>
                <GalleryCard.Image src={item} alt={`Pic`} />
              </GalleryCard>
            </Grid.Col>
          ))}
        </Grid.Row>
      </Page.Content>
    );
  }
}

export default CameraPage;
