import styled from "styled-components";
import { Flex } from "reflexbox/styled-components";
import Link from "next/link";
import Router from "next/dist/next-server/lib/router/router";
import { useRouter } from "next/router";

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

const Round = styled(Flex)`
    width: 40px;
    height: 40px;
    background-color:#333;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    right: 2vw;
    top: 2vh;
    border: none;
    padding: 1em;
    
`

const Header = ({ page }) => {
    const router = useRouter();

    const path = page === "home" ? "/about" : "/";

    return(
        <HeaderBase>
            <H1>Portfolio</H1>
            <Subtitle>Ida Jørgensen Thinn</Subtitle>
            <Round as="button" onClick={() => {router.push(path); console.log("Pushed", path)}}>
                    {page === "home" ? "CV" : "Hjem"}
            </Round>
        </HeaderBase>
    )
}

export default Header;

// <Link href={home ? "/about" : "/"}>{home ? "Hjem" : "CV"}</Link>