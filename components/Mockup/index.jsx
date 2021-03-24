import {Box, Flex} from "reflexbox/styled-components";
import styled from "styled-components";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css"
import { arrayMax } from "highcharts";
import { useEffect, useState } from "react";


const burgerImg = [
    "/img/burgerMockups/kitchenMockup.png",
    "/img/burgerMockups/restMockup.png"
]



const ImgWrapper = styled(Flex)`

width: 100%;
height: auto;
align-items: center;
justify-content: center;
`

/*
const addOne = (array) => {

    console.log("ARRAY", array);
    let index = 0;

    setInterval(() => {
        index += 1;

        if(index === array.length) {
            index = 0
        }

        //console.log(index)
    }, 10000)
}

addOne();*/

const Mockup = ({handleChange, numbOfImg, src}) => {

    const [count, setCount] = useState("1");

    console.log(numbOfImg);
 
    
/*    
useEffect(() => {

    let index = 0;

    
    setInterval(() => {
        index += 1;

        if(index === numbOfImg) {
            index = 1
        }

        console.log("MOCKUP", index)
        setCount(index);
    }, 10000)

}, [])

*/



    return(
        <>
        <ImgWrapper>
        <Image
                src={`${src + count + ".png"}`}
                height={500}
                width={800}
                className={utilStyles.mockComp}
                
            />
        </ImgWrapper>
        </>
    )
}

export default Mockup;
