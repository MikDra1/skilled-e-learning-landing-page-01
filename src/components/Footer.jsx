import styled from "styled-components"
import Button from "./Button"

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 2rem;
    background-color: var(--blue-900);
    padding-inline: var(--padding-inline); 

    & img {
        @media (max-width: 770px) {
            width: 6rem;
        }
    }
`

function Footer() {
    return (
        <StyledFooter>
            <img src="./images/logo-light.svg" alt="logo" />
            <Button type="purple">Get Started</Button>
        </StyledFooter>
    )
}

export default Footer
