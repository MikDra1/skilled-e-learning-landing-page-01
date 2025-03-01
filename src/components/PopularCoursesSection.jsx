import styled from "styled-components";
import PopularCourse from "./PopularCourse";

const StyledPopularCoursesSection = styled.section`
  margin-top: 12rem;
  display: grid;
  gap: 4rem 2.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 8rem;
  padding-inline: var(--padding-inline); 

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`;

const TitleBox = styled.div`
  background: var(--gradient-pink);

  padding: 3.5rem 1.5rem 1.5rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);

  & h2 {
    color: var(--white);
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.1;
  }

  @media (max-width: 770px) {
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.07);

    & h2 {
      font-size: 1.5rem;
    }
  }
`;

function PopularCoursesSection() {
  return (
    <StyledPopularCoursesSection>
      <TitleBox>
        <h2>Check out our most popular courses!</h2>
      </TitleBox>
      <PopularCourse image="./images/icon-animation.svg" title="Animation">
        Learn the latest animation techniques to create stunning motion design
        and captivate your audience.
      </PopularCourse>

      <PopularCourse image="./images/icon-design.svg" title="Design">
        Create beautiful, usable interfaces to help shape the future of how the
        web looks.
      </PopularCourse>

      <PopularCourse image="./images/icon-photography.svg" title="Photography">
        Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.
      </PopularCourse>

      <PopularCourse image="./images/icon-crypto.svg" title="Crypto">
        All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.
      </PopularCourse>

      <PopularCourse image="./images/icon-business.svg" title="Business">
        A step-by-step playbook to help you start, scale, and sustain your business without outside investment.
      </PopularCourse>
    </StyledPopularCoursesSection>
  );
}

export default PopularCoursesSection;
