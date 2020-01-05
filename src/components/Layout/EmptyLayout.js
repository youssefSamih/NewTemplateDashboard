import React from 'react';
import { Grid } from "semantic-ui-react";

// import { Content } from "components/Layout";

const EmptyLayout = ({ children, ...restProps }) => {
  return (
    <Grid textAlign="center" verticalAlign="middle" className="app" { ...restProps }>
      {children}
    </Grid>
  );
}

export default EmptyLayout;
