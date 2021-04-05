import styled from "styled-components";
import {Box, Flex} from "reflexbox/styled-components"
import Link from "next/link"

export const H1 = styled.h1`
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.fontSizes.lg};
    margin: 0;
    letter-spacing: ${props => props.theme.letterSpacings[1]};
    text-align: center;
`

export const H2 = styled.h2`
    font-family: ${props => props.theme.fonts.main};    
    font-size: ${props => props.theme.fontSizes.md};
    margin: 0;
    letter-spacing: ${props => props.theme.letterSpacings[1]};
    text-transform: uppercase;
    text-align: center;
`

export const H3 = styled.h3`
font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.fontSizes.sm};
    margin: 0;
    text-align: center;
`



export const P = styled.p`
font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.fontSizes.txt};
    text-align: center;
    
`
export const Pleft = styled(P)`
    font-family: "frank-new";
    text-align: left;
`

export const Pitalic = styled(P)`

    font-style: italic;
    text-align: center;
`

export const Li = styled.li`
   margin-bottom: 1em;
   font-size: ${props => props.theme.fontSizes.sm};

`



const Info = ({heading, info, year, details}) => {
    return(
        <Box width="100vw" maxWidth="40em" p={3}  flexDirection="column">
            <H2>{heading}</H2>
            <H3>({year})</H3>
            <Pitalic>{info}</Pitalic>
            <P>{details}</P>
        </Box>
    )
}

export default Info;