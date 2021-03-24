import React, { useState } from "react";

import { Flex, Box } from "reflexbox/styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import InfoBox from "../components/InfoBox";
import { SectionBase } from "../components/StyledComponents/SectionBase";
import Refugees from "../components/Refugees"
import Mockup from "../components/Mockup"


const Home = () => {



  const [imgSrc, setImgSrc] = useState(null)

  const burgerImg = [
    "/img/burgerMockups/kitchenMockup.png",
    "/img/burgerMockups/restMockup.png"
]

/*

  const handleImgChange = (element, array, interval) => {
   
      let index = 0;

      setInterval(() => {
          index += 1;

          if (index === array.length) {
              index = 0;
          }

          
          setImgSrc(array[index])
          //return array[index];
          //el.src = arr[index];
  
      }, interval)
  }

  console.log(imgSrc);*/

  return (
    <Layout>
      <Flex justifyContent="space-between" alignItems="center" flexDirection="column">
        
        <Box>
          <InfoBox heading="Flyktningstatistikk" year="2021" info="React, Highcharts, Javascript"></InfoBox>
          <SectionBase flexDirection="column" mt={4} width="100%">
            <Refugees/>
          </SectionBase>
        </Box>

        <Box>
          <InfoBox heading="Bestillingsløsning" year="2021" info="React, Next.js, Firebase" details="Skoleoppgave: Lag en bestillingsløsning for en burgerrestaurant med realtime-oppdateringer mellom kjøkkenvisning, restaurantvisning og kundevisning. Autentisering og skjemavalidering."></InfoBox>
          <SectionBase flexDirection="column" mt={5}>
            <Mockup src="/img/burgerMockups/mockup-0" numbOfImg={4} handleChange={(array, interval) => handleImgChange(array, interval)}></Mockup>
          </SectionBase>
        </Box>


        
        
      </Flex>
    </Layout>
    
  )
}

export default Home;