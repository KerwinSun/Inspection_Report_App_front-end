import React, { Component } from "react";
import axios from 'axios';
import { Page, Grid, Card, Table, Button } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import { server } from '../config';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wipHouses: [{
        "id": 1,
        "completed": false,
        "address": "21 Symonds Street",
        "date": "2018-08-28T00:00:00",
        "constructionType": "old",
        "categories": null
      },
      {
        "id": 2,
        "completed": false,
        "address": "23 Symonds Street",
        "date": "2018-08-28T00:00:00",
        "constructionType": "new ",
        "categories": null
      }],
      completedHouses: [{
        "id": 1,
        "completed": true,
        "address": "21 Symonds Street",
        "date": "2018-08-28T00:00:00",
        "constructionType": "old",
        "categories": null
      }, {
        "id": 2,
        "completed": true,
        "address": "23 Symonds Street",
        "date": "2018-08-28T00:00:00",
        "constructionType": "new ",
        "categories": null
      }]
    }
  }

  componentDidMount() {
    /*
    var id = 0; //set user id
    axios
      .get(server + "/user/" + id, { withCredentials: true })
      .then(res => {
        //handle response
        var houses = res.inspected;
        var wipHouses = [];
        var completedHouses = [];
        houses.map(value => { value.completed ? completedHouses.push(value) : wipHouses.push(value) });
        this.setState({ wipHouses: wipHouses, completedHouses: completedHouses });
      })
      .catch(res => {
        //handle response error
        console.log(res);
      })
      */
  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content title="Dashboard">
          <Grid.Row cards={true}>
            <Grid.Col>
              <Card>
                <Card.Header>
                  <Card.Title>Inspections in Process</Card.Title>
                </Card.Header>
                <Table cards={true} responsive={true} className="table-vcenter">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColHeader>Address</Table.ColHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.state.wipHouses.map(house => (
                      <Table.Row key={house.id}>
                        <Table.Col>
                          <a href={house.id}>{house.address}</a>
                        </Table.Col>
                      </Table.Row>                    
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row cards={true}>
            <Grid.Col>
              <Card>
                <Card.Header>
                  <Card.Title>Completed Inspections</Card.Title>
                </Card.Header>
                <Table cards={true} responsive={true} className="table-vcenter">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColHeader>Address</Table.ColHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.state.completedHouses.map(house => (
                      <Table.Row key={house.id}>
                        <Table.Col>
                          <a href={house.id}>{house.address}</a>
                        </Table.Col>
                      </Table.Row>                    
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col xs={6} md={6} lg={6} offset={3}>
              <Button
                RootComponent="a"
                href="/new-inspection"
                block={true}
                color="secondary"
              >
                Begin New Inspection
              </Button>
            </Grid.Col>
            <Grid.Col xs={3} />
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  }
}

export default Home;
