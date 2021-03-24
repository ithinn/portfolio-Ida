import React, { useState } from "react";

import { Flex, Box } from "reflexbox/styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Info from "../components/Info";
import { SectionBase } from "../components/StyledComponents/SectionBase";
import Refugees from "../components/Refugees"
import Mockup from "../components/Mockup"
import Map from "../components/Map";
import Test from "../components/Test";

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
      <Flex width="100%" height="auto" alignItems="center" flexDirection="column">
        
        <Flex flexDirection="column" alignItems="center" height="auto" width="100%">
          <Info heading="Flyktningstatistikk" year="2021" info="React, Highcharts, Javascript"></Info>
          <SectionBase flexDirection="column">
            <Refugees/>
          </SectionBase>
        </Flex>

        <Flex flexDirection="column" alignItems="center" height="100vh" width="100%">
          <Info bg="purple" heading="Bestillingsløsning" year="2021" info="React, Next.js, Firebase" details="Skoleoppgave: Lag en bestillingsløsning for en burgerrestaurant med realtime-oppdateringer mellom kjøkkenvisning, restaurantvisning og kundevisning. Autentisering og skjemavalidering."></Info>
          <SectionBase flexDirection="column" mt={4} height="auto" >
            <Mockup src="/img/burgerMockups/mockup-0" numbOfImg={4} handleChange={(array, interval) => handleImgChange(array, interval)}></Mockup>
          </SectionBase>
        </Flex>

        <Flex flexDirection="column" alignItems="center" height="auto" width="100%">
          <Info 
          heading="Sammenlign land" year="2020" info="Design" details="Designet ikoner og ny sidevisning for FN-sambandet"></Info>
          <SectionBase flexDirection="column" mt={4}>
            <Mockup src="/img/compare/compare-" numbOfImg={4} handleChange={(array, interval) => handleImgChange(array, interval)}></Mockup>
          </SectionBase>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Info 
          heading="Konfliktkart" year="2021" info="Mapbox, CosmicJs, React, Javascript" details="Noen detaljer om kartet"></Info>
          <SectionBase flexDirection="column" mt={4}>
            <Test/>
          </SectionBase>
        </Flex>


        
        
      </Flex>
    </Layout>
    
  )
}

export default Home;