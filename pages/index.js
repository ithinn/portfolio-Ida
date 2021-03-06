import React, { useState, useEffect } from "react";
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
import Link from "next/link";
import Image from "next/image";
const Home = () => {

  const [windowSize, setWindowSize] = useState({width: undefined, height: undefined});

  useEffect(() => {
    if (typeof window !== "undefined") {
        
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize)
    }
}, [])



  const [imgSrc, setImgSrc] = useState(null)

  const compare = [
    "/img/compare/small/comp-22.png",
    "/img/compare/small/comp-21.png",
    "/img/compare/small/comp-19.png",
    "/img/compare/small/comp-20.png",
  ]

  const burger = [
    "/img/burger/small/mockup-01.png",
    "/img/burger/mockup-02.png",
    "/img/burger/mockup-03.png",
    "/img/burger/mockup-04.png",
  ]

  const ec = [
    "/img/ec/small/ec-09.png",
    "/img/ec/small/ec-10.png",
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

  const pp = [
    "/img/pp/Lysbilde15.png",
    "/img/pp/Lysbilde6.png",
    "/img/pp/Lysbilde8.png",
    "/img/pp/Lysbilde12.png",
    "/img/pp/Lysbilde17.png",
    "/img/pp/Lysbilde21.png",
  ]

  console.log(windowSize.width);
  const width = windowSize.width;
  return (
    <Layout home>
      <Flex width="100%" height="auto" alignItems="center" flexDirection="column">

        <Section flexDirection="column" width="100%" alignItems="center" >
          <Info heading={width > 400 ? "Flyktningstatistikk" : "Flyktning-statistikk"} year="2021" info="React, Highcharts, Javascript"></Info>
          <Refugees/>
          <Flex alignItems="center" justifyContent="center">
            <Image src="/img/gitHubLogo.png" width={30} height={30}/>
            <Link href="https://github.com/ithinn/conflict-map">
                <a>Lenke til repo</a>
            </Link>
          </Flex>
        </Section>

        <Section flexDirection="column" alignItems="center" height="auto" width="100%">
          <Info 
            heading={width > 400 ? "Instrumentoppl??ring" : "Instrument-oppl??ring"} year="2021" info="React, Next.js" details="Hackathon for EC-play: Navigasjon og sidestruktur for videooppl??ring"></Info>
          <SlideShow array={ec}/>
          <Flex alignItems="center" justifyContent="center">
            <Image src="/img/gitHubLogo.png" width={30} height={30}/>
            <Link href="https://github.com/ithinn/ec-play-hackathon">
                <a>Lenke til repo</a>
            </Link>
          </Flex>
        </Section>

        <Section flexDirection="column" alignItems="center" height="auto" width="100%">
          <Info 
            heading="Konfliktkart" year="2021" info="React, Mapbox, Cosmic, Highcharts, Plotly" details="Skoleoppgave: Lag et navigerbart kart ved hjelp av headless CMS og Mapbox, visualiser data hentet fra et eksternt API"></Info>
          <SlideShow array={map}/>
          <Flex alignItems="center" justifyContent="center">
            <Image src="/img/gitHubLogo.png" width={30} height={30}/>
            <Link href="https://github.com/ithinn/conflict-map">
                <a>Lenke til repo</a>
            </Link>
          </Flex>
        </Section>
        
        <Section flexDirection="column" alignItems="center" width="100%">
          <Info heading={width > 400 ? "Bestillingsl??sning" : "Bestillings-l??sning"} year="2021" info="React, Next.js, Firebase" details="Skoleoppgave: Lag en bestillingsl??sning for en burgerrestaurant med realtime-oppdateringer mellom kj??kkenvisning, restaurantvisning og kundevisning. Autentisering og skjemavalidering."></Info>
          <SlideShow array={burger}/>
          <Flex alignItems="center" justifyContent="center">
            <Image src="/img/gitHubLogo.png" width={30} height={30}/>
            <Link href="https://github.com/ithinn/burger-restaurant">
                <a>Lenke til repo</a>
            </Link>
          </Flex>
        </Section>


        <Section flexDirection="column" alignItems="center" height="auto" width="100%">
          <Info 
            heading="Sammenlign land" year="2020" info="Design" details="Designet ikoner og ny sidevisning for FN-sambandet"></Info>
          <SlideShow array={compare}/>
    
            <Link href="https://www.fn.no">
                <a>Se p?? FN-sambandets sider</a>
            </Link>
   
        </Section>

        <Section flexDirection="column" alignItems="center" height="auto" width="100%">
          <Info 
          url="https://www.fn.no" heading={width > 400 ? "Statistikkvisning" : "Statistikk-visning"} year="2020" info="Design" details="Designet ny statistikkvisning for FN-sambandet"></Info>
          <SlideShow array={stat}/>
          <Link href="https://www.fn.no/statistikk">
                <a>Se p?? FN-sambandets sider</a>
          </Link>
        </Section>
      </Flex>
    </Layout>
    
  )
}

export default Home;

