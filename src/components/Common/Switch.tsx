import React from "react";
import styled from "styled-components";

const Bar = styled.div<{ active: boolean }>`
  display: flex;
  border-radius: 100px;
  width: 38px;
  min-width: 38px;
  height: 24px;
  background-color: ${({ active }) =>
    active ? "var(--ina-orange)" : "var(--ika-purple)"};
  flex-direction: row;
  transition: 0.2s linear;
`;

const Circle = styled.div<{ active: boolean }>`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background: white;
  margin: auto 3px;

  transform: translateX(${({ active }) => (active ? "15px" : "0")});
  transition: 0.2s linear;
`;
const Container = styled.div`
  display: flex;
  margin-right: 57px;
  flex-direction: row;
  :hover {
    cursor: pointer;
  }
`;

const Label = styled.span`
  margin: auto 0 auto 0.2em;
  color: var(--ika-purple);
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
`;

export const Switch = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (b: boolean) => void;
}): JSX.Element => {
  const handleClick = () => {
    onChange(!value);
  };
  return (
    <Container onClick={handleClick}>
      <Bar active={value}>
        <Circle active={value} />
      </Bar>
      <Label>{label}</Label>
    </Container>
  );
};
