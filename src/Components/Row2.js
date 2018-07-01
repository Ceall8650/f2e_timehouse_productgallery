import React, { Component } from 'react'
import styled from 'styled-components';
import p3 from 'assets/p3.jpg';
import p4 from 'assets/p4.jpg';
import p5 from 'assets/p5.jpg';
import p6 from 'assets/p6.jpg';
import p7 from 'assets/p7.jpg';

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 6.25%);
  grid-template-rows: repeat(26, 50px);
`

const Title3 = styled.div`
  grid-area: 2 / 3 / 3 / 9;
  font-size: 48px;
  line-height: 48px;
  position: relative;
  color: rgba(0,0,0,1);
  display: flex;
  align-items: flex-end;
  ::before, ::after{
    content: attr(data-title);
    display: flex;
    align-items: flex-end;
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
const Logo3 = styled.div`
  grid-area: 3 / 1 / 7 / 9;
  background: url(${p3}) no-repeat 0% 50%;
  background-size: cover;
`
const Frame3 = styled.div`
  grid-area: 4 / 6 / 8 / 10;
  border: 20px solid #50E3C2;
`
const Content3 = styled.div`
  grid-area: 7 / 1 / 9 / 5;
  font-style: italic;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`
const ProNo3 = styled.div`
  grid-area: 7 / 9 / 9 / 11;
  font-size: 48px;
  color: #000000;
  line-height: 48px;
`
const Square1 = styled.div`
  grid-area: 2 / 1 / 6 / 5;
  background-color: #50E3C2;
`

const Title4 = styled.div`
  grid-area: 3 / 11 / 5 / 15;
  transform: rotate(-90deg);
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
const Logo4 = styled.div`
  grid-area: 3 / 13 / 11 / 17;
  background: url(${p4}) no-repeat 0% 50%;
  background-size: cover;
`
const Frame4 = styled.div`
  grid-area: 1 / 12 / 5 / 16;
  border: 20px solid #50E3C2;
`
const Content4 = styled.div`
  grid-area: 1 / 14 / 3 / 17; 
  font-style: italic;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  transform: rotate(90deg);
`
const ProNo4 = styled.div`
  grid-area: 9 / 11 / 11 / 13;
  font-size: 48px;
  color: #000000;
  line-height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
const Stripes4 = styled.div`
  grid-area: 10 / 13 / 12 / 17;
  background-image: repeating-linear-gradient(-45deg, 
  #50E3C2,
  #50E3C2 20px,
  transparent 20px,
  transparent 40px);
  transform: rotate(180deg);
`

/* P5 */
const Title5 = styled.div`
  grid-area: 12 / 1 / 14 / 6;
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
const Logo5 = styled.div`
  grid-area: 11 / 5 / 15 / 9;
  background: url(${p5}) no-repeat 0% 50%;
  background-size: cover;
  transform: scaleX(-1);
`
const Frame5 = styled.div`
  grid-area: 14 / 3 / 16 / 7;
  border: 20px solid #50E3C2;
`
const Content5 = styled.div`
  grid-area: 11 / 9 / 13 / 13; 
  font-style: italic;
  font-size: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
const ProNo5 = styled.div`
  grid-area: 14 / 3 / 16 / 5;
  font-size: 48px;
  color: #000000;
  line-height: 48px;
  display: flex;
`
const Stripes5 = styled.div`
  grid-area: 10 / 2 / 12 / 6;
  background-image: repeating-linear-gradient(-45deg, 
  #50E3C2,
  #50E3C2 20px,
  transparent 20px,
  transparent 40px);
  transform: rotate(180deg);
`

/* P6 */
const Title6 = styled.div`
  grid-area: 14 / 11 / 15 / 17;
  font-size: 48px;
  line-height: 48px;
  position: relative;
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
const Logo6 = styled.div`
  grid-area: 15 / 9 / 23 / 17;
  background: url(${p6}) no-repeat 0% 50%;
  background-size: cover;
`
const Frame6 = styled.div`
  grid-area: 15 / 9 / 24 / 17;
  border: 20px solid #50E3C2;
`
const Content6 = styled.div`
  grid-area: 23 / 11 / 24 / 15; 
  font-style: italic;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const ProNo6 = styled.div`
  grid-area: 18 / 8 / 19 / 9;
  font-size: 48px;
  color: #000000;
  line-height: 48px;
  display: flex;
  justify-content: flex-end;;
  align-items: flex-end;
`
const Square6 = styled.div`
  grid-area: 19 / 8 / 23 / 9;
  background-color: #50E3C2;
`

/* P7 */
const Title7 = styled.div`
  grid-area: 20 / 4 / 21 / 7;
  top: 15px;
  font-size: 48px;
  line-height: 48px;
  position: relative;
  color: rgba(0,0,0,1);
  transform: rotate(90deg);

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
const Logo7 = styled.div`
  grid-area: 19 / 1 / 27 / 5;
  background: url(${p7}) no-repeat 0% 50%;
  background-size: cover;
`
const Frame7 = styled.div`
  grid-area: 18 / 2 / 24 / 6;
  border: 20px solid #50E3C2;
`
const Content7 = styled.div`
  grid-area: 18 / 1 / 19/ 5; 
  font-style: italic;
  font-size: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`
const ProNo7 = styled.div`
  grid-area: 26 / 6 / 27 / 7;
  font-size: 48px;
  color: #000000;
  line-height: 48px;
  display: flex;
  justify-content: flex-end;;
  align-items: flex-end;
`
const Square7 = styled.div`
  grid-area: 23 / 5 / 27 / 7;
  background-color: #50E3C2;
`

export default class Row1 extends Component {
  render() {
    return (  
      <Root>
        <Frame3></Frame3>
        <Title3 data-title="SUPER SKINNY">SUPER SKINNY</Title3>
        <Square1 />
        <Logo3 />
        <Content3>Men’s pattern shirts</Content3>
        <ProNo3>03</ProNo3>

        <Frame4></Frame4>
        <Title4 data-title="DENIM">DENIM</Title4>
        <Logo4 />
        <Content4>Men’s cadual</Content4>
        <ProNo4>04</ProNo4>
        <Stripes4 />

        <Frame5></Frame5>
        <Content5>Men’s jacket</Content5>
        <Logo5 />
        <Stripes5 />
        <Title5 data-title="SWEATSHIRTS">SWEATSHIRTS</Title5>
        <ProNo5>05</ProNo5>

        <Frame6></Frame6>
        <Title6 data-title="VINTAGE DENIM">VINTAGE DENIM</Title6>
        <Square6 />
        <Logo6 />
        <Content6>Men’s classic</Content6>
        <ProNo6>06</ProNo6>

        <Frame7></Frame7>
        <Title7 data-title="EDITION">EDITION</Title7>
        <Square7 />
        <Logo7 />
        <Content7>Men’s shirts</Content7>
        <ProNo7>07</ProNo7>
      </Root>
    )
  }
}
