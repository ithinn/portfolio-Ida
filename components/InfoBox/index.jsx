import styled from "styled-components";
import {Box} from "reflexbox/styled-components"


const H2 = styled.h2`
    font-size: ${props => props.theme.fontSizes.md};
    margin: 0;
`

const H3 = styled.h3`
    font-size: ${props => props.theme.fontSizes.sm};
    margin: 0;
`

const P = styled.p`
    font-size: ${props => props.theme.fontSizes.txt}
`

const Pitalic = styled(P)`
    font-style: italic;
`



const InfoBox = ({heading, info, year}) => {
    return(
        <Box variant="infobox">
            <H2>{heading}</H2>
            <H3>({year})</H3>
            <Pitalic>{info}</Pitalic>
        </Box>
    )
}

export default InfoBox;