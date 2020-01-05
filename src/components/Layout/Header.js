import React, { Component } from 'react'
import { Dropdown, Icon, Menu, Header } from 'semantic-ui-react'

export default class HeaderMain extends Component {
  render() {
    return (
      <div>
        <Header as='h2' attached='top'>
          Attached Header
        </Header>
      </div>
    )
  }
}
