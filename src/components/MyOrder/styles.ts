import { darken } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled(Link)`
position: absolute;
right: 1.5rem;
bottom: 0.5rem;

background: ${({ theme }) => theme.colors.red};
padding: 0.5rem 1rem;
border-radius: 0.5rem;

display: flex;
align-items: center;

transtion: backgroun 0.3s;

&:hover {
  backgorund: ${darken(0.1, '#AA2424')};
}

span:first-child {
  margin-right: 0.25rem;
  font-weight: 500;
  font-size: 1rem;
}

svg {
  fill: ${({ theme }) => theme.colors.white};
  width: 2rem;
  height: 2rem;
}

span:last-child {
  margin-left: 0.75rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.yellow};
}

@media (max-width: 720px) {
  top: 0.5rem;
  bottom: initial;

  span:first-child {
    display: none;
  }
}
`
