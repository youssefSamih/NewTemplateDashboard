import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';

import AuthForm, { STATE_LOGIN } from "components/AuthForm";

class AuthPage extends Component {
  render() {
    return (
      <Grid.Column style={{ maxWidth: 450 }}>
        <AuthForm 
          authState={this.props.authState}
        />
      </Grid.Column>
    )
  }
}

export default AuthPage;