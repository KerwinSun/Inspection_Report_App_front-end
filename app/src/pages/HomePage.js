import React from "react";
import { Page, Grid, Card, Table, Button, Progress } from "tabler-react";
import SiteWrapper from "../SiteWrapper";

function Home() {
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
                    <Table.ColHeader>Progress</Table.ColHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col><a href="/inspect/1">35 Symonds Street</a></Table.Col>
                    <Table.Col>
                      <Progress size="xs">
                        <Progress.Bar color="blue" width={42} />
                      </Progress>
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col><a href="/inspect/2">35 Symonds Street</a></Table.Col>
                    <Table.Col>
                      <Progress size="xs">
                        <Progress.Bar color="blue" width={30} />
                      </Progress>
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col><a href="/inspect/3">35 Symonds Street</a></Table.Col>
                    <Table.Col>
                      <Progress size="xs">
                        <Progress.Bar color="blue" width={99} />
                      </Progress>
                    </Table.Col>
                  </Table.Row>
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
                  <Table.Row>
                    <Table.Col><a href="/inspect/4">35 Symonds Street</a></Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col><a href="/inspect/5">35 Symonds Street</a></Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col><a href="/inspect/6">35 Symonds Street</a></Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col xs={4} />
          <Grid.Col xs={4}>
            <Button
              RootComponent="a"
              href="/new-inspection"
              block={true}
              color="secondary"
            >
            Begin New Inspection
            </Button>
          </Grid.Col>
          <Grid.Col xs={4} />
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
