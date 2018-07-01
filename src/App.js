import React, { Component } from 'react';
import styled from 'styled-components';
import Topbar from 'view/Topbar';
import Main from 'view/Main';

const Root = styled.div`
  height: 100%;
  display: grid;
  grid-template: repeat(20, 100px) / repeat(8, 120px);
`

 class App extends Component {
  render() {
    return (
      <Root>
        <Topbar />
        <Main />
      </Root>
    );
  }
}

export default App;
