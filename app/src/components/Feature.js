import React from 'react';
import { Card, Form, Button, Icon } from "tabler-react";

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
      <Form.Group label={<Form.Label>Comments</Form.Label>}>
        <Form.Textarea 
          name="comments"
          placeholder="Add comment"
          rows={4}
        />
      </Form.Group>
      <Button.List align="center">
        <Button
          RootComponent="a"
          href="/camera"
          color="secondary"
        >
          <Icon prefix="fe" name="camera" />        
        </Button>
      </Button.List>
    </Card.Body>
  </Card>
);

export default Feature;