import styled from "styled-components";
import {Box} from "reflexbox/styled-components"
import Link from "next/link"


const H2 = styled.h2`
    font-size: ${props => props.theme.fontSizes.md};
    margin: 0;
    letter-spacing: ${props => props.theme.letterSpacings[1]};
    text-transform: uppercase;
    text-align: center;
`

const H3 = styled.h3`
    font-size: ${props => props.theme.fontSizes.sm};
    margin: 0;
    text-align: center;
`

const P = styled.p`
    font-size: ${props => props.theme.fontSizes.txt};
    text-align: center;
`

const Pitalic = styled(P)`
    font-style: italic;
    text-align: center;
`



const Info = ({heading, info, year, details}) => {
    return(
        <Box width="80%" p={3}>
            <H2>{heading}</H2>
            <H3>({year})</H3>
            <Pitalic>{info}</Pitalic>
            <P>{details}</P>
        </Box>
    )
}

export default Info;