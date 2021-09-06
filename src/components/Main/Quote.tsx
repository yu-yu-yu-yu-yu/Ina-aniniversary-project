import React from "react";
import styled from "styled-components";

const QuoteContainer = styled.div`
  background: transparent linear-gradient(180deg, #c4bdd2 0%, #d3cce1 100%) 0% 0% no-repeat padding-box;
  text-align: center;
  padding: 40px 20px;
`;

const QuoteInaImg = styled.img`
  display: inline-block;
  
  width: 300px;
  @media only screen and (max-width: 701px) {
    width: 200px;
  }
  
`;

const QuoteContent = styled.div`
  text-align: left;
  font: normal normal normal 40px/51px Roboto;
  letter-spacing: 2.5px;
  color: #ffffff;
  display: inline-block;
  margin-left: 40px;

  @media only screen and (max-width: 701px) {
    display: block;
    margin:auto;
    text-align: center;
    font: normal normal normal 26px/32px Roboto;
    letter-spacing: 1.3px;
  }
  
  img {
    border-bottom: solid 4px;
    padding-bottom: 40px;
    
    width: 300px;

    @media only screen and (max-width: 701px) {
        width: 250px;
        padding-bottom: 10px;
        padding-top: 20px;
    }

    @media only screen and (max-width: 300px) {
        width: 200px;
        padding-bottom: 10px;
        padding-top: 20px;
    }
  }
`;

const Quote = (): JSX.Element => {
    return (
        <QuoteContainer>
            <QuoteInaImg src={`${process.env.PUBLIC_URL}/InaInaIna.png`} />
            <QuoteContent>
                <img
                    alt="WAH"
                    src={`${process.env.PUBLIC_URL}/WAH.png`}
                />
                <br />
                Ninomae Ina&apos;nis
                <br />
                2020·09·13
            </QuoteContent>
        </QuoteContainer>
    );
};

export default Quote;
