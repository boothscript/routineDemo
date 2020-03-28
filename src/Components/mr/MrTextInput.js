import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TextInput = styled.input`
  grid-column: 1/-1;
  align-self: center;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  background: inherit;
  border: none;
  border-radius: 16px;
  background: ${props => props.theme.panel && props.theme.panel};
  color: ${props => props.theme.white90 && props.theme.white90};
  resize: none;
  outline: none;
  padding: 1.25em;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

function MrTextInput({ inputKey, value, placeholder, update }) {
  const handleChange = e => {
    update(inputKey, e.target.value);
  };

  return (
    <TextInput
      onChange={e => handleChange(e)}
      placeholder={placeholder}
      value={value}
    />
  );
}

MrTextInput.propTypes = {
  inputId: PropTypes.number,
  confirmFn: PropTypes.func,
  placeholder: PropTypes.string
};

export default MrTextInput;
