import { BoxShadow } from "../../theme/StyledElements";
import styled from "styled-components";

export const Container = styled.div`
  ${BoxShadow};
  display: flex;
  flex: 1;
  padding: 24px;
  background: ${(props) => props.theme.white};
`;
