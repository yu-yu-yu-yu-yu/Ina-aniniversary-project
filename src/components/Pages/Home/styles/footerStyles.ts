import styled from "styled-components";

const Footer = styled.footer`
  position: relative;  
  z-index: 2;
  background: var(--light-highlight) 0% 0% no-repeat padding-box;
  padding: 25px 0px;
  opacity: 1;
  display: flex;
  width: 100%;

  flex-direction: row;
  justify-content: space-around;
  
  @media only screen and (max-width: 750px) {
    padding: 35px 0px;
    padding-top: 5px;
  }

  .footer-social-container{    
    flex-grow: 2;
    display: flex;
    flex-direction: column;

    justify-content:center;
    
    margin: 10px;

    .social-links {
      margin-left: 30px;
      
      @media only screen and (max-width: 750px) {
        margin-left: 0px;
      }
    }
    
    p {
      display: inline-block;
      margin 10px;
    }

  }

  .disclaimer-container { 
    position: absolute;
    width: 80%;
    
    left: 50%;
    bottom: 2%;
    transform: translate(-50%, -30%);

    p {  
      text-align: center;
      font-size: 15px;
      margin: 0px;

      @media only screen and (max-width: 1460px) {
        font-size: 12px;
      }

      @media only screen and (max-width: 950px) {
        font-size: 10px;
      }
      
      @media only screen and (max-width: 750px) {
        font-size: 8px;
      }

      @media only screen and (max-width: 280px) {
        font-size: 5px;
      }
    }
  }

  p{
    
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
    font-weight: 400;

    letter-spacing: 0px;
    color: #4F415C;

    @media only screen and (max-width: 1460px) {
      font-size: 25px;
    }

    @media only screen and (max-width: 950px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 750px) {
      font-size: 19px;
    }

    @media only screen and (max-width: 475px) {
      font-size: 15px;
    }

    @media only screen and (max-width: 405px) {
      font-size: 12px;
    }

    @media only screen and (max-width: 280px) {
      font-size: 9px;
    }
  }
 

  .fa {
    margin-right: auto;
    margin-top: auto;
  }

  .footer-img-container{
    flex-grow: 2;

    img{
      cursor: pointer;
    }
    
    display: flex;
  }

  .footer-img {
    margin: auto;
    max-width: 500px;
    width: 20vw;
    margin-right: 30px;

    @media only screen and (max-width: 950px) {
      width: 100%;
      max-width: 30vw;
    }

    @media only screen and (max-width: 750px) {
      max-width: 250px;
      width: 40vw;
    }

    @media only screen and (max-width: 350px) {
      max-width: 150px;
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
  transform: translate(-50%, -62%);
  top: 0%;

  img {
    width: 120px;

    @media only screen and (max-width: 1200px) {
      width: 80px;
    }
  }

  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

const CreditsModal = styled.div`
  width: 600px;
  height: auto;
  padding: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--light-background);
  border-radius: 15px;
  z-index: 69;
  color: #ffffff;

  font-family: "Mulish", sans-serif;

  a {
    font-weight: bold;
    color: #ffffff;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    text-shadow: 0px 0px 20px #0f0f0f;
  }

  @media only screen and (max-width: 700px) {
    width: 80%;
  }

  table {
    width: 100%;
  }

  th {
    text-align: left;
    font-size: 25px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
  }

  td {
    font-size: 17px;
    @media only screen and (max-width: 700px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  th,
  td {
    padding: 2px 10px;
  }

  p {
    font-weight: 200;
    text-align: center;
    font-size: 16px;
  }

  hr {
    border: 0;
    border-bottom: 1px solid #ddd;
  }
`;

export { Footer, AoLogo, CreditsModal };