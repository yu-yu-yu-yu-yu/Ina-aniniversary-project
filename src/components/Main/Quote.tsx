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
`;

const QuoteContent = styled.div`
  text-align: left;
  font: normal normal normal 40px/51px Roboto;
  letter-spacing: 2.5px;
  color: #ffffff;
  display: inline-block;
  margin-left: 40px;
`;

const Quote = (): JSX.Element => {
    return (
        <QuoteContainer>
            <QuoteInaImg src={`${process.env.PUBLIC_URL}/InaInaIna.png`} />
            <QuoteContent>
                <img
                    alt="WAH"
                    src={`${process.env.PUBLIC_URL}/WAH.png`}
                    style={{
                        borderBottom: "solid 4px",
                        paddingBottom: "40px",
                        width: "300px",
                    }}
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
