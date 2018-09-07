import React from "react";
import { Page } from "tabler-react";
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
