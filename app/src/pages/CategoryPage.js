import React, { Component } from "react";
import { Page, Card, Form, Button } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import CategoryList from "../components/CategoryList";


class CategoryPage extends Component {
  state = {
    categories: ""
  };
  componentWillMount() {
    //alert("hello world");
    this.setState(
      {
        categories: {
          id: 1,
          inspectedBy: null,
          address: "21 Symonds Street",
          date: "2018-08-28T00:00:00",
          constructionType: "old",
          categories: [
            {
              id: 4,
              name: "test",
              features: [
                {
                  id: 1,
                  name: "lamp",
                  grade: "will need attention",
                  comments: "looks a bit old"
                },
                {
                  id: 2,
                  name: "wardrobe",
                  grade: "good",
                  comments: "good"
                }
              ]
            },
            {
              id: 3,
              name: "bedtest",
              features: [
                {
                  id: 1,
                  name: "lamp",
                  grade: "will need attention",
                  comments: "looks a bit old"
                },
                {
                  id: 2,
                  name: "wardrobe",
                  grade: "good",
                  comments: "good"
                }
              ]
            },
            {
              id: 1,
              name: "bedroom1",
              features: [
                {
                  id: 1,
                  name: "lamp",
                  grade: "will need attention",
                  comments: "looks a bit old"
                },
                {
                  id: 2,
                  name: "wardrobe",
                  grade: "good",
                  comments: "good"
                }
              ]
            },
            {
              id: 2,
              name: "bedroom2",
              features: [
                {
                  id: 3,
                  name: "lamp",
                  grade: "will need attention",
                  comments: "looks a bit old"
                },
                {
                  id: 4,
                  name: "wardrobe",
                  grade: "good",
                  comments: "good"
                }
              ]
            }
          ]
        }
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    console.log(this.state.categories);
    return (
      <SiteWrapper>
        <Page.Card
          title="Categories"
          RootComponent={Form}
          footer={
            <Card.Footer>
              <div className="d-flex">
                <Button link>Cancel</Button>
                <Button type="submit" color="primary" className="ml-auto">
                  Send data
                </Button>
              </div>
            </Card.Footer>
          }
        >

          <CategoryList categories={this.state.categories} />
        </Page.Card>
      </SiteWrapper>
    );
  }
}

export default CategoryPage;
