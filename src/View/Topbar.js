import React, { Component } from 'react'
import styled from 'styled-components';

const Root = styled.div`
  grid-column: 1 / 9;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: repeat(2, 12.5%) 1fr 3fr 2fr 2fr 2fr 2fr 3fr 1fr repeat(2, 12.5%);
  grid-template-rows: 28% 72%;
`
const SubTitle = styled.h3`
  grid-column: 6 / 8; 
  grid-row: 1 / 2;
  display: flex;
  justify-content: center;
  font-size: 20px;
  span{
    display: flex;
    align-items: center;
    background-color: #000;
    color: #fff;
  }
`
const Title = styled.h1`
  grid-row: 2/3
  grid-column: 4 / 11; 
  display: flex;
  justify-content: center;
  font-size: 72px;
  span{
    display: flex;
    align-items: center;
    color: #000;
  }
`

export default class Topbar extends Component {
  render() {
    return (
      <Root>
        <SubTitle>
          <span>CCCLOTHES</span>
        </SubTitle>
        <Title>
          <span>MEN’S TOPS</span>
        </Title>
      </Root>
    )
  }
}
