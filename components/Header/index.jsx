import styled from "styled-components";

const HeaderBase = styled.header`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom: 4px solid black;
    margin-bottom: ${props => props.theme.space[3]};
`

const H1 = styled.h1`
    font-size: ${props => props.theme.fontSizes.xl};
    text-align: left;
    margin-bottom: 0;
`

const Subtitle = styled.h2`
    font-size: 1.7rem;
    font-style: italic;
    text-align: left;
    margin-top: 0;
`

const Header = () => {
    return(
        <HeaderBase>
            <H1>Portfolio</H1>
            <Subtitle>Ida Jørgensen Thinn</Subtitle>
        </HeaderBase>
    )
}

export default Header;