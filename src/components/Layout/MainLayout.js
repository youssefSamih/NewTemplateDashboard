import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { Sidebar, Content, Header } from "components/Layout";

export default class MainLayout extends Component {
  state = {
    visible: false
  }

  render() {
    const { children } = this.props
    return (
      <Grid columns="equal" className="app">
        <Sidebar />
        <div className="headerBar" style={{ marginLeft: 225}} >
          <Header />
        </div>
        <Grid.Column style={{ marginLeft: 225, top: 30 }} >
          <Content fluid>
            {children}
          </Content>
        </Grid.Column>
      </Grid>
    )
  }
}
