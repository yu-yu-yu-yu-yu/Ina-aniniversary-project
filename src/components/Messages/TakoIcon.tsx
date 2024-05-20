import React, {useState} from "react";
import styled from "styled-components";

const TakoImg = styled.img`
    width: 75px;
    margin-right: 10px;
    filter: drop-shadow(2px 2px 1px darkgray);
    opacity: 1;
`;


const TakoImgContainer = styled.div`
  display: flex;
`;

const PunContainer = styled.div`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 8%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: var(--ika-purple);
    border-top: 0;
    margin-left: -20px;
    margin-top: -20px;
    
  }
  font: normal normal 300 20px/25px Mulish;
  min-height: 50px;
  border: 2px solid var(--ika-purple);
  border-radius: .4em;
  position: absolute;
  background: white;
  z-index: 69;
  top: 100px;
  min-width: 90%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.25);
`

interface TakoIconProps {
    id?: string
    pun?: string
  index: number
}

const PunDisplay = styled.span`
  color: var(--ika-purple);
`



const PunHint = styled.div`
  color: #fff;
  font-size: 14px;
  max-width: 28ch;
  text-align: center;
  left: -1.5em;
  top: -1em;
  --b: 2em;
  --p: 50%;
  --r: 1.2em;
  height: 1.5em;
  padding: 1em;
  border-radius: 5em;
  display: flex;
  align-items: center;
  background: var(--inai-purple);
  position: absolute;
  &:before {
    content: "";
    position: absolute;
    left: 100%;
    top: clamp(0%,var(--p) - var(--b)/4,100% - var(--b)/2);
    width: var(--b);
    aspect-ratio: 1;
    background: inherit;
    --g:#000 calc(100% - 1px),#0000;
    -webkit-mask:
            radial-gradient(circle closest-side at 88% 88%,var(--g)),
            radial-gradient(20% 20% at 55% 48%,var(--g)),
            radial-gradient(25% 25% at 0 25%,var(--g));
  }
`

const prng = (seed: number) => seed * 16807 % 2147483647


export const TakoIcon = ({ id, pun, index }: TakoIconProps): JSX.Element => {
    const useRandom = !id
    const images = ['8-bit Tako.png', 'Hollow Tako.png', 'Ikadachi.png', 'Mori Tako.png', 'Robodachi.png', 'Tako Amelia (Takoson).png',
    'Tako Gura (Chum Tako).png', 'Tako Ina.png', 'Tako Kiara (Tako Bell).png', 'Tako Ross.png', 'Takodachi.png', 'Takomfy.png', 'Tophat Tako.png',
    'Violet Tako.png', 'Wonder Tako.png', 'Yuul B. Tako.png']
    const imgurl =  useRandom ? `${process.env.PUBLIC_URL}/icon/${images[prng(index) % images.length]}` : `${process.env.PUBLIC_URL}/takos/${id}`
    const [punVisible, setPunVisible] = useState(false)
    const togglePun = () => {
      setPunVisible(!punVisible);
    }
  return (
      <TakoImgContainer onClick={!pun ? undefined : togglePun }>
        {pun && !punVisible && <PunHint>...</PunHint>}
            <TakoImg
                alt={`tako-icon-${id}`}
                src={imgurl}
            />
        {punVisible && <PunContainer onClick={e=> e.stopPropagation()}><PunDisplay>{pun}</PunDisplay></PunContainer>}
      </TakoImgContainer>
    )
};
