import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  position: relative;  
  z-index: 2;
  background: #fba147 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  width: 100%;

  flex-direction: row;
  justify-content: space-around;

  
  .footer-social-container{    
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    

    a{
      margin: auto;
    }

  }

  .disclaimer-container{ 
      flex-grow: 1;
      max-width 35vw;
      margin-top: 40px;
      text-align: center;  

      @media only screen and (max-width: 950px) {
        margin: auto;
      }
  }

  p{
    
    font: normal normal normal 35px/43px Montserrat;
    letter-spacing: 0px;
    color: #4F415C;

    @media only screen and (max-width: 1460px) {
      font: normal normal normal 25px/35px Montserrat;
      letter-spacing: 0px;
    }

    @media only screen and (max-width: 950px) {
      font: normal normal normal 20px/20px Montserrat;
      letter-spacing: 0px;
    }

    @media only screen and (max-width: 750px) {
      font: normal normal normal 11px/14px Montserrat;
    }

    @media only screen and (max-width: 280px) {
      font: normal normal normal 9px/11px Montserrat;
    }
  }
 

  .fa {
    margin-right: auto;
    margin-top: auto;
  }

  .footer-img-container{
    flex-grow: 2;
    
    // margin-left: auto;
    display: flex;
  }

  .footer-img {
    margin: auto;
    max-width: 300px;
    width: 18vw;
    // margin-left: auto;

    @media only screen and (max-width: 950px) {
      width: 100%;
      max-width: 10em;
    }

    @media only screen and (max-width: 750px) {
      max-width: 120px;
      width: 15vw;
    }

    @media only screen and (max-width: 350px) {
      max-width: 100px;
    }

    @media only screen and (max-width: 270px) {
      display: none;
    }


  }

  i{
    font-size: 48px; 
    color: #4F415C;

    @media only screen and (max-width: 950px) {
      font-size: 24px; 
    }
  }

`;

const AoLogo = styled.div`
  z-index: 2;
  position: absolute;
  left: 50%;
  margin-top: -7em;

  @media only screen and (max-width: 1200px) {
    margin-top: -4.6em;
  }

  img{
    width: 120px;

    @media only screen and (max-width: 1200px) {
      width: 80px;
    }
  
  }

  @media only screen and (max-width: 950px) {
    display: none;
  }
`;


const HomeFooter = (): JSX.Element => {

  return (
    <Footer>
      <AoLogo>
        <img
          alt="Ao-chan Logo"
          src={`${process.env.PUBLIC_URL}/AOPatternFilledIn.png`}
        />
      </AoLogo>
      <div className="footer-social-container">
        <a href="https://twitter.com/ninomaeinanis">
          <p>
            <i className="fa fa-twitter"></i> @ninomaeinanis
          </p>
        </a>
        <a rel="stylesheet" href="https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg">
          <p>
            <i className="fa fa-youtube-play"></i> Ninomae Ina&apos;nis Ch.
          </p>
        </a>
      </div>
      <div className="disclaimer-container">
        <p>
          This is a fan project. We are not affiliated or endorsed by Cover Corporation.
        </p>
      </div>
      <div className="footer-img-container">
        <img
          alt="mini-ina"
          className="footer-img"
          src={`${process.env.PUBLIC_URL}/MiniIna.png`}
        />
      </div>


    </Footer>
  );
};


export default HomeFooter;