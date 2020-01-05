import React, { Component } from 'react'
import { Header, Icon, Form, Segment, Button, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import "./App.css";

export default class AuthForm extends Component {
  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  render() {
    const { showLogo, usernameInputProps, passwordInputProps, confirmPasswordInputProps, children } = this.props;
    return (
      <>
        {
          showLogo && (
            <Header as="h1" icon color="violet" textAlign="center">
              <Icon name="code branch" color="pink" >
                {this.isSignup ? 'Register' : 'Login'}
              </Icon>
            </Header>
          )
        }
        <Form size="large" >
          <Segment stacked>
            <Form.Input fluid name="email" icon="mail" iconPosition="left" { ...usernameInputProps } />
            <Form.Input fluid name="password" icon="lock" iconPosition="left" {...passwordInputProps} />
            {this.isSignup && (
              <Form.Input fluid name="password" icon="lock" iconPosition="left" {...confirmPasswordInputProps} />
            )}
            <Button fluid size="large" className="btn-grad" color="pink" >Submit</Button>
          </Segment>
        </Form>
        <Message>
          {
            this.isSignup ? (
              <>
                You have an account ? <Link to="/login" >Login</Link>
              </>
            ) : (
              <>
                Don't have an account ? <Link to="/register" >Register</Link>
              </>
            )
          }
        </Message>
        {children}
      </>
    )
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameInputProps: PropTypes.object,
  passwordInputProps: PropTypes.object,
  confirmPasswordInputProps: PropTypes.object
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com'
  },
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password'
  },
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm password'
  }
}