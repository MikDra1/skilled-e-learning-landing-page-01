import styled from "styled-components";
import Button from "./Button";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 2rem;
  padding-inline: var(--padding-inline);
  margin-bottom: 5rem;

  @media (max-width: 770px) {
    margin-bottom: 0;
  }

  & img {
    @media (max-width: 770px) {
      width: 6rem;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src="./images/logo-dark.svg" alt="logo" />
      <Button type="black">Get Started</Button>
    </StyledHeader>
  );
}

export default Header;
