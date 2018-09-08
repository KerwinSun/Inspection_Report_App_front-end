import React from 'react';
import { Card, Form } from "tabler-react";

const Feature = (props) => (
  <Card title={props.name} isCollapsed={true} isClosable isCollapsible>
    <Card.Body>
      <Form.Group label="Rating">
        <Form.Radio
          name="rating"
          label="Good"
          value="1"
        />
        <Form.Radio
          name="rating"
          label="Will need attention"
          value="2"
        />
        <Form.Radio
          name="rating"
          label="Need immediate attention"
          value="3"
        />
        <Form.Radio
          name="rating"
          label="N/A"
          value="4"
        />
      </Form.Group>
      <Form.Input label="Comments" placeholder="Looks good" />
    </Card.Body>
  </Card>
);

export default Feature;