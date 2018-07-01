import React, { Component } from 'react'
import styled from 'styled-components';
import Row1 from 'components/Row1';
import Row2 from 'components/Row2';

const Root = styled.div`
  grid-area: 2 / 1 / 21 / 9;
`

export default class Main extends Component {
  render() {
    return (
      <Root>
        <Row1></Row1>
        <Row2></Row2>
      </Root>
    )
  }
}
