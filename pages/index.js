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
import SlideShow from "../components/SlideShow";
import { Section } from "../components/Section";
const Home = () => {



  const [imgSrc, setImgSrc] = useState(null)

  const compare = [
    "/img/compare/compare-1.png",
    "/img/compare/compare-2.png",
    "/img/compare/compare-3.png",
    "/img/compare/compare-4.png",
  ]

  const burger = [
    "/img/burger/mockup-01.png",
    "/img/burger/mockup-02.png",
    "/img/burger/mockup-03.png",
    "/img/burger/mockup-04.png",
  ]


  return (
    <Layout>
      <Flex width="100%" height="auto" alignItems="center" flexDirection="column">

        <Section flexDirection="column" width="100%" alignItems="center" >
          <Info heading="Flyktningstatistikk" year="2021" info="React, Highcharts, Javascript"></Info>
          <Refugees/>
        </Section>

        <Section flexDirection="column" alignItems="center" width="100%">
          <Info heading="Bestillingsløsning" year="2021" info="React, Next.js, Firebase" details="Skoleoppgave: Lag en bestillingsløsning for en burgerrestaurant med realtime-oppdateringer mellom kjøkkenvisning, restaurantvisning og kundevisning. Autentisering og skjemavalidering."></Info>
          <SlideShow array={burger}/>
        </Section>

        <Section flexDirection="column" alignItems="center" height="auto" width="100%">
          <Info 
          heading="Sammenlign land" year="2020" info="Design" details="Designet ikoner og ny sidevisning for FN-sambandet"></Info>
          <SlideShow array={compare}/>
        </Section>

      </Flex>
    </Layout>
    
  )
}

export default Home;

/*<Section flexDirection="column" alignItems="center" width="100%">
          <Info 
          heading="Konfliktkart" year="2021" info="Mapbox, CosmicJs, React, Javascript" details="Noen detaljer om kartet"></Info>

          <Map></Map>
         
        </Section>*/ 