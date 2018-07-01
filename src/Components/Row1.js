import React, { Component } from 'react'
import styled from 'styled-components';
import p1 from 'assets/p1.jpg';
import p2 from 'assets/p2.jpg';

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 6.25%);
  grid-template-rows: repeat(10, 50px);
`

const Title1 = styled.div`
  grid-column: 1 / 9;
  grid-row: 3/4;
  font-size: 48px;
  line-height: 48px;
  position: relative;
  top: -15px;
  color: rgba(0,0,0,1);
  ::before, ::after{
    content: attr(data-title);
    position: absolute;
    left: 0;
  }
  ::before{
    top: -20px;
    color: rgba(0,0,0,10%);
  }
  ::after{
    top: -10px;
    color: rgba(0,0,0,30%);
  }
`
const Logo1 = styled.div`
  grid-area: 3 / 1 / 11 / 9;
  background: url(${p1}) no-repeat 0% 50%;
  background-size: cover;
`
const Frame1 = styled.div`
  grid-area: 2 / 6 / 6 / 10;
  border: 20px solid #50E3C2;
`
const Content1 = styled.div`
  grid-area: 10 / 8 / 11 / 11;
  font-style: italic;
  transform: rotate(90deg) ; 
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
const ProNo1 = styled.div`
  grid-area: 11 / 1 / 12 / 2;
  font-size: 48px;
  color: #000000;
  line-height: 48px;
`

const Stripes = styled.div`
  grid-area: 10 / 2 / 12 / 6;
  background-image: repeating-linear-gradient(-45deg, 
  #50E3C2,
  #50E3C2 20px,
  transparent 20px,
  transparent 40px);
  transform: rotate(180deg);
`

const Title2 = styled.div`
  grid-area: 11 / 13 / 10 / 15;
  font-size: 48px;
  line-height: 48px;
  position: relative;
  top: -35px;
  color: rgba(0,0,0,1);
  ::before, ::after{
    content: attr(data-title);
    position: absolute;
    left: 0;
  }
  ::before{
    top: -20px;
    color: rgba(0,0,0,10%);
  }
  ::after{
    top: -10px;
    color: rgba(0,0,0,30%);
  }
`
const Logo2 = styled.div`
  grid-area: 5 / 11 / 9 / 15;
  background: url(${p2}) no-repeat 0% 50%;
  background-size: cover;
`
const Frame2 = styled.div`
  grid-area: 3 / 13 / 7 / 17;
  border: 20px solid #50E3C2;
`
const Content2 = styled.div`
  grid-area: 3 / 9 / 5 / 13; 
  font-style: italic;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  justify-content: flex-end;
`
const ProNo2 = styled.div`
  grid-area: 3 / 15 / 5 / 17;
  font-size: 48px;
  color: #000000;
  line-height: 48px;
  display: flex;
  justify-content: flex-end;
`

const Square = styled.div`
  grid-area: 4 / 12 / 8 / 16;
  background-color: #50E3C2;
`

export default class Row1 extends Component {
  render() {
    return (  
      <Root>
        <Frame1></Frame1>
        <Title1 data-title="LINEN BLAZER">LINEN BLAZER</Title1>
        <Logo1 />
        <Content1>Men’s outfit</Content1>
        <ProNo1>01</ProNo1>
        <Stripes />
        <Frame2></Frame2>
        <Square />
        <Title2 data-title="FREELIFT">FREELIFT</Title2>
        <Logo2 />
        <Content2>Men’s basics</Content2>
        <ProNo2>02</ProNo2>
      </Root>
    )
  }
}
