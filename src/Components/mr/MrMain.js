import styled from "styled-components";

export default styled.div`
  background: ${props =>
    props.panel ? props.theme.panel : props.theme.darkest};
  border-radius: 16px;
  grid-column: ${props => (props.strech ? "1 / -1" : "span 1")};
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
`;