import styled from "styled-components";
import { Flex } from "reflexbox/styled-components"


export const Section = styled(Flex)`
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 5em;
`

Section.defaultProps = {
    as: "section"
}