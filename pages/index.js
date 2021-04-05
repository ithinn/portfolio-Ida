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
    "/img/compare/comp-19.png",
    "/img/compare/comp-20.png",
    "/img/compare/comp-21.png",
    "/img/compare/comp-22.png",
  ]

  const burger = [
    "/img/burger/mockup-01.png",
    "/img/burger/mockup-02.png",
    "/img/burger/mockup-03.png",
    "/img/burger/mockup-04.png",
  ]

  const ec = [
    "/img/ec/ec-09.png",
    "/img/ec/ec-10.png",
    "/img/ec/ec-11.png",
  ]

  const stat = [
    "/img/stat/stat_1.png",
    "/img/stat/stat_2.png",
    "/img/stat/stat_3.png",
    "/img/stat/stat_4.png",
    "/img/stat/stat_5.png",
    "/img/stat/stat_6.png",
  ]

  const map = [
    "/img/map/map_1.png",
    "/img/map/map_2.png",
  ]


  return (
    <Layout home>
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
          heading="Instrumentopplæring" year="2021" info="React, Next.js" details="Hackathon for EC-play: Navigasjon og sidestruktur for videoopplæring"></Info>
          <SlideShow array={ec}/>
        </Section>

        <Section flexDirection="column" alignItems="center" height="auto" width="100%">
          <Info 
          heading="Konfliktkart" year="2021" info="React, Mapbox, Cosmic, Highcharts, Plotly" details="Skoleoppgave: Lag et navigerbart kart ved hjelp av headless CMS og Mapbox, visualiser data hentet fra et eksternt API"></Info>
          <SlideShow array={map}/>
        </Section>

        <Section flexDirection="column" alignItems="center" height="auto" width="100%">
          <Info 
          heading="Sammenlign land" year="2020" info="Design" details="Designet ikoner og ny sidevisning for FN-sambandet"></Info>
          <SlideShow array={compare}/>
        </Section>

        <Section flexDirection="column" alignItems="center" height="auto" width="100%">
          <Info 
          heading="Statistikkvisning" year="2020" info="Design" details="Designet ny statistikkvisning for FN-sambandet"></Info>
          <SlideShow array={stat}/>
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