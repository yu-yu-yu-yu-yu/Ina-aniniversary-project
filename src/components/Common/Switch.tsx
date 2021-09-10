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
  &.mobile {
    width: 20px;
    min-width: 20px;
    height: 12px;
    align-self: center;
  }
`;

const Circle = styled.div<{ active: boolean }>`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background: white;
  margin: auto 3px;

  transform: translateX(${({ active }) => (active ? "15px" : "0")});
  transition: 0.2s linear;
  &.mobile {
    width: 10px;
    height: 10px;
    margin: auto 1px;
    transform: translateX(${({ active }) => (active ? "8px" : "0")});
  }
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
  &.mobile {
    font: normal normal 300 16px/19px Montserrat;
  }
`;

export const Switch = ({
  label,
  value,
  onChange,
  mobile,
}: {
  label: string;
  value: boolean;
  onChange: (b: boolean) => void;
  mobile?: boolean;
}): JSX.Element => {
  const handleClick = () => {
    onChange(!value);
  };
  return (
    <Container onClick={handleClick} className={mobile ? "mobile" : ""}>
      <Bar active={value} className={mobile ? "mobile" : ""}>
        <Circle active={value} className={mobile ? "mobile" : ""} />
      </Bar>
      <Label className={mobile ? "mobile" : ""}>{label}</Label>
    </Container>
  );
};
