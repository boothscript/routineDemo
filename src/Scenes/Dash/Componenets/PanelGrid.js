import React from "react";
import styled from "styled-components";

const Div = styled.div`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  padding: 5px;
  background: ${(props) => props.theme[props.bgColor]};
`;

function PanelGrid({ row, column, bgColor, children }) {
  return (
    <Div row={row} column={column} bgColor={bgColor}>
      {children}
    </Div>
  );
}

export default PanelGrid;
