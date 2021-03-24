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

const LargeImg = styled.image`
    object-fit: cover;
    width: 100%;
    height: auto;


`

const ImgWrapper = styled(Flex)`

width: 100%;
height: auto;
align-items: center;
justify-content: center;

`

const DesktopBase = styled(Box)`
    width: 60%;
    height: auto;
    background-color: pink;
   
`

const MobileBase = styled(Box)`
background-color: blue;
    width: 40%;
    height: auto;
    
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
/*
<Image
                src={handleChange(burgerImg, 3000)}
                height={500}
                width={800}
                layout="responsive"
                className={utilStyles.mockComp}
                
            />*/