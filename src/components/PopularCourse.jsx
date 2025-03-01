import styled from "styled-components";
import Button from "./Button";

const StyledPopularCourse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--white);
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 770px) {
    box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.07);
  }

  img {
    position: absolute;
    top: -2rem;
  }

  & h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-top: 1.5rem;
    margin-bottom: .75rem;
  }

  & p {
    color: var(--grey);
    font-weight: 500;
  }
`;

function PopularCourse({ image, title, children }) {
  return (
    <StyledPopularCourse>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{children}</p>
      <Button type="blank">Get Started</Button>
    </StyledPopularCourse>
  );
}

export default PopularCourse;
