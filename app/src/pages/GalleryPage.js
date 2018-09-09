import React, { Component } from "react";
import { Page, Grid, GalleryCard } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import json from "../resources/Gallery.Items";

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header
            title="Gallery"
          />
          <Grid.Row className="row-cards">
            {json.items.map((item, key) => (
              <Grid.Col width={6} lg={4} key={key}>
                <GalleryCard>
                  <GalleryCard.Image
                    src={item.imageURL}
                    alt={`Photo by ${item.fullName}`}
                    />
                </GalleryCard>
              </Grid.Col>
            ))}
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );  
  }
}

export default GalleryPage;
