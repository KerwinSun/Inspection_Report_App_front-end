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
              <Grid.Col lg={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>My Profile</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Grid.Row>
                        <Grid.Col auto>
                          <Avatar size="xl" imageURL="INSERTIMAGEHERE" />
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
                          defaultValue="Insert stuff here"
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
            </Grid.Row>
          </Container>
        </div>
      </SiteWrapper>
    );
  }
}

export default ProfilePage;
