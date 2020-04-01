import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MrButton from "./Components/MrButton";

const Div = styled.div`
  grid-column: 2/-2;
  align-self: start;
  justify-self: end;
  padding-top: 2em;
`;

function MrFooter({ buttonFunc, nextDisabled, buttonProps }) {
  console.log("buttonprops", buttonProps);
  console.log(nextDisabled);
  const { nextButtonText, displayBackButton } = buttonProps;

  return (
    <Div>
      {displayBackButton ? (
        <MrButton text="back" buttonFunc={buttonFunc} reverse={true} />
      ) : null}
      <MrButton
        disabled={nextDisabled}
        text={nextButtonText}
        buttonFunc={buttonFunc}
        reverse={false}
      />
    </Div>
  );
}

MrFooter.propTypes = {
  buttonFunc: PropTypes.func.isRequired,

  nextDisabled: PropTypes.bool.isRequired
};

export default MrFooter;