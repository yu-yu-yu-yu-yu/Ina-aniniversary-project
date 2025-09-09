import React, { ChangeEventHandler } from "react";
import styled from "styled-components";


const SwitchContainer = styled.div`
    display: inline-box;
    margin-right: auto;
    margin-left: auto;
`;

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 30px;
  border-radius: 100px;
  border: 2px solid gray;
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 25px;
  height: 26px;
  border-radius: 45px;
  transition: 0.2s;
  background: grey;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`;

const SwitchTextLabel = styled.div`
  color: var(--ika-purple);
  font: normal normal 300 25px/30px Montserrat;
  letter-spacing: 0px;
  color: #564F68;
  opacity: 1;
  margin: auto;
  margin-left: 5px;
`;

interface SwitchProps {
  id: string;
  label: string;
  toggled: boolean;
  onChange: ChangeEventHandler;
}

const MessageBoardSwitch = ({ id, label, toggled, onChange }: SwitchProps): JSX.Element => {


  return (
    <SwitchContainer>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        <SwitchButton className="switch-button" />
      </SwitchLabel>
      <SwitchTextLabel>
        {label}
      </SwitchTextLabel>
    </SwitchContainer>

  );
};

export default MessageBoardSwitch;
