import styled from "styled-components";
import { H1, H2, H3, P, Pitalic, Pleft, Li, NavA, Nav } from "../Info";
import {Flex} from "reflexbox"


const List = ({array}) => {

    return(
        <Flex mt={5} flexDirection="column" alignItems="center">
            <H3>Kurs: </H3>
            <ul>
                {array.map((item, index) => {
                    return <Li key={item + index}>{item}</Li>
                })}
        
            </ul>
        </Flex>

    )
}

export default List;