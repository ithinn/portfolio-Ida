import styled from "styled-components";
import {Box, Flex} from "reflexbox/styled-components"
import { H3 } from "../Info"

const Date = styled.p`
    font-size: ${props => props.theme.fontSizes.txt};
    font-weight: 600;
    
`
const Where = styled.p`
    font-size: ${props => props.theme.fontSizes.txt};
    font-weight: default;
    margin: 0;
`
const Title = styled(H3)`
    text-align: left;
`

const Ul = styled.ul`

`

const LiDetail = styled.li`
    margin-bottom: ${props => props.theme.space[3]};
`



const Point = ( {date, where, title, details} ) => {
    return(
        <Box m={5}>
        <Flex flexWrap="wrap" alignItems="flex-start" justifyContent="space-between" m={3}>
            <Box mr={3}>
                <Where>{where}</Where>
                <Title>{title}</Title>
            </Box>
            <Date>{date}</Date>
        </Flex>

        <Ul>
            {details !== undefined ? details.map((item, index) => {
            return <LiDetail key={item + index}>{item}</LiDetail>
            }) : null}
        </Ul>
        </Box>   
    )
}

export default Point