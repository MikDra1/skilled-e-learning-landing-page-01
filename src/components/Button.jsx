import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 770px) {
    padding: 0.65rem 1.3rem;
  }
`;

const BlackButton = styled(StyledButton)`
  background-color: var(--blue-900);
  color: var(--white);
`;

const PurpleButton = styled(StyledButton)`
  background: var(--gradient-purple);
  color: var(--white);
`;

const ButtonOrange = styled(StyledButton)`
  background: var(--gradient-pink);
  color: var(--white);
`;

const BlankButton = styled(StyledButton)`
  background: none;
  color: var(--pink-600);
  padding: 0;
  font-weight: 700;
  padding-block: 0.75rem;
  margin-top: auto;

  &:hover {
    opacity: 0.6;
  }
`;

function Button({ type = "black", children }) {
  return (
    <>
      {type === "black" ? (
        <BlackButton>{children}</BlackButton>
      ) : type === "purple" ? (
        <PurpleButton>{children}</PurpleButton>
      ) : type === "orange" ? (
        <ButtonOrange>{children}</ButtonOrange>
      ) : type === "blank" ? (
        <BlankButton>{children}</BlankButton>
      ) : null}
    </>
  );
}

export default Button;
