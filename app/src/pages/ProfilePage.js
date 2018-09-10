import React, { Component } from "react";
import { Container, Grid, Card, Button, Form, Avatar } from "tabler-react";
import SiteWrapper from "../SiteWrapper";

class ProfilePage extends Component {
  render() {
    return (
      <SiteWrapper>
        <div className="my-3 my-md-5">
          <Container>
            <Grid.Row>
              <Grid.Col lg={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>My Profile</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Grid.Row>
                        <Grid.Col auto>
                          <Avatar
                            size="xl"
                            imageURL="demo/faces/female/9.jpg"
                          />
                        </Grid.Col>
                        <Grid.Col>
                          <Form.Group>
                            <Form.Label>Email-Address</Form.Label>
                            <Form.Input placeholder="your-email@domain.com" />
                          </Form.Group>
                        </Grid.Col>
                      </Grid.Row>
                      <Form.Group>
                        <Form.Label>Bio</Form.Label>
                        <Form.Textarea
                          rows={5}
                          defaultValue="Big belly rude boy, million dollar hustler. Unemployed."
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Email-Address</Form.Label>
                        <Form.Input placeholder="your-email@domain.com" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Input type="password" defaultValue="Password" />
                      </Form.Group>
                      <Form.Footer>
                        <Button color="primary" block>
                          Save
                        </Button>
                      </Form.Footer>
                    </Form>
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col lg={8}>
                <Form className="card">
                  <Card.Body>
                    <Card.Title>Edit Profile</Card.Title>
                    <Grid.Row>
                      <Grid.Col md={5}>
                        <Form.Group>
                          <Form.Label>Company</Form.Label>
                          <Form.Input
                            type="text"
                            disabled
                            placeholder="Company"
                            defaultValue="Creative Code Inc."
                          />
                        </Form.Group>
                      </Grid.Col>
                      <Grid.Col sm={6} md={3}>
                        <Form.Group>
                          <Form.Label>Username</Form.Label>
                          <Form.Input
                            type="text"
                            placeholder="Username"
                            defaultValue="michael23"
                          />
                        </Form.Group>
                      </Grid.Col>
                      <Grid.Col sm={6} md={4}>
                        <Form.Group>
                          <Form.Label>Email address</Form.Label>
                          <Form.Input type="email" placeholder="Email" />
                        </Form.Group>
                      </Grid.Col>
                      <Grid.Col sm={6} md={6}>
                        <Form.Group>
                          <Form.Label>First Name</Form.Label>
                          <Form.Input
                            type="text"
                            placeholder="First Name"
                            defaultValue="Chet"
                          />
                        </Form.Group>
                      </Grid.Col>
                      <Grid.Col sm={6} md={6}>
                        <Form.Group>
                          <Form.Label>Last Name</Form.Label>
                          <Form.Input
                            type="text"
                            placeholder="Last Name"
                            defaultValue="Faker"
                          />
                        </Form.Group>
                      </Grid.Col>
                      <Grid.Col md={12}>
                        <Form.Group>
                          <Form.Label>Address</Form.Label>
                          <Form.Input
                            type="text"
                            placeholder="Home Address"
                            defaultValue="Melbourne, Australia"
                          />
                        </Form.Group>
                      </Grid.Col>
                      <Grid.Col sm={6} md={4}>
                        <Form.Group>
                          <Form.Label>City</Form.Label>
                          <Form.Input
                            type="text"
                            placeholder="City"
                            defaultValue="Melbourne"
                          />
                        </Form.Group>
                      </Grid.Col>
                      <Grid.Col sm={6} md={3}>
                        <Form.Group>
                          <Form.Label>Postal Code</Form.Label>
                          <Form.Input type="number" placeholder="ZIP Code" />
                        </Form.Group>
                      </Grid.Col>
                      <Grid.Col md={5}>
                        <Form.Group>
                          <Form.Label>Country</Form.Label>
                          <Form.Select>
                            <option>Germany</option>
                          </Form.Select>
                        </Form.Group>
                      </Grid.Col>
                      <Grid.Col md={12}>
                        <Form.Group className="mb=0" label="About Me">
                          <Form.Textarea
                            rows={5}
                            placeholder="Here can be your description"
                            defaultValue={`Oh so, your weak rhyme You doubt I'll bother, reading into it I'll probably won't, left to my own devices But that's the difference in our opinions.`}
                          />
                        </Form.Group>
                      </Grid.Col>
                    </Grid.Row>
                  </Card.Body>
                  <Card.Footer className="text-right">
                    <Button type="submit" color="primary">
                      Update Profile
                    </Button>
                  </Card.Footer>
                </Form>
              </Grid.Col>
            </Grid.Row>
          </Container>
        </div>
      </SiteWrapper>
    );
  }
}

export default ProfilePage;
