import styled from "styled-components";
import Button from "./Button";
import { useProject } from "../contexts/ProjectProvider";

const StyledHero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 5rem;
  overflow-x: hidden;
  padding-inline: var(--padding-inline);

  @media (max-width: 770px) {
    flex-direction: column;
    padding-block: 0rem;
    margin-top: 3rem;
  }

  img {
    width: 60vw;
    position: absolute;
    top: -20vh;
    right: -20vw;
    z-index: -1;

    @media (max-width: 1650px) {
      top: -15vh;
      width: 65vw;
    }

    @media (max-width: 1450px) {
      top: -15vh;
      width: 70vw;
      right: -22vw;
    }

    @media (max-width: 1250px) {
      top: -5vh;
      width: 75vw;
    }

    @media (max-width: 1200px) {
      top: 0vh;
      width: 80vw;
      right: -25vw;
    }

    @media (max-width: 1050px) {
      top: 5vh;
      width: 80vw;
    }

    @media (max-width: 900px) {
      top: 15vh;
    }

    @media (max-width: 770px) {
      position: static;
      margin-top: 2rem;
      width: 100vw;
      scale: 1.1;
    }
  }
`;

const HeroContentContainer = styled.div`
  width: 45%;
  margin-top: 4rem;

  @media (max-width: 770px) {
    width: 100%;
    margin-top: 0;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 1050px) {
    font-size: 3rem;
  }

  @media (max-width: 770px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  color: var(--grey);
  margin-bottom: 2rem;
  font-size: 1.2rem;

  @media (max-width: 770px) {
    font-size: 1rem;
  }
`;

function Hero() {
  const { isTablet, isMobile } = useProject();

  return (
    <StyledHero>
      <HeroContentContainer>
        <Title>Maximize skill, minimize budget</Title>
        <Description>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </Description>
        <Button type="orange">Get Started</Button>
      </HeroContentContainer>
      {isMobile ? (
        <img
          srcSet="/images/images-hero-mobile.png 600w, /images/image-hero-mobile@2x.png 1200w"
          sizes="(min-width: 770px) 600px, 1200px"
          alt="hero"
        />
      ) : isTablet ? (
        <img
          srcSet="/images/images-hero-tablet.png 600w, /images/image-hero-tablet@2x.png 1200w"
          sizes="(max-width: 600px) 600px, 1200px"
          alt="hero"
        />
      ) : (
        <img
          srcSet="/images/images-hero-desktop.png 600w, /images/image-hero-desktop@2x.png 1200w"
          sizes="(max-width: 600px) 600px, 1200px"
          alt="hero"
        />
      )}
    </StyledHero>
  );
}

export default Hero;
