import React from "react";
import { NavLink } from "react-router-dom";
import { Page, Card, Grid, Form, Button, Dropdown } from "tabler-react";
import SiteWrapper from "../SiteWrapper";

function Empty() {
  return (
    <SiteWrapper>
      <Page.Content title="This is an empty page">
      </Page.Content>
    </SiteWrapper>
  );
}

export default Empty;
