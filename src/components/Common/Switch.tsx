import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 0.1em;
  cursor: pointer;
`;

const Bar = styled.div<{ active: boolean; color: string }>`
  position: relative;
  border-radius: 100px;
  width: 38px;
  min-width: 38px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${({ active, color }) => active ? color : "var(--dark-highlight)"};
  transition: background-color 0.2s linear;
  &.mobile {
    width: 28px;
    min-width: 28px;
    height: 16px;
  }
`;

const Circle = styled.div<{ active: boolean; color: string }>`
  position: absolute;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  background: var(--text-color);
  border: 2px solid ${({ color }) => color};
  top: 50%;
  left: 3px;
  transform: translateY(-50%) translateX(${({ active }) => (active ? "14px" : "0px")});
  transition: transform 0.2s linear;
  &.mobile {
    width: 12px;
    height: 12px;
    left: 2px;
    transform: translateY(-50%) translateX(${({ active }) => (active ? "12px" : "0px")});
  }
`;

const Label = styled.span`
  color: var(--dark-highlight);
  text-align: left;
  font: normal normal 300 25px/26px Montserrat;
  letter-spacing: 0;
  &.mobile {
    color: white;
    font: normal normal 300 13px/16px Montserrat;
  }
`;

export const Switch = ({
  label,
  value,
  onChange,
  color = "var(--dark-highlight)",
  mobile,
}: {
  label: string;
  value: boolean;
  onChange: (b: boolean) => void;
  color?: string;
  mobile?: boolean;
}): JSX.Element => {
  const cls = mobile ? "mobile" : "";
  return (
    <Container onClick={() => onChange(!value)}>
      <Bar active={value} color={color} className={cls}>
        <Circle active={value} color={color} className={cls} />
      </Bar>
      <Label className={cls}>{label}</Label>
    </Container>
  );
};
