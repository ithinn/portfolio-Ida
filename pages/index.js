import React from "react";
import { Flex, Box } from "reflexbox/styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import InfoBox from "../components/InfoBox";
import { SectionBase } from "../components/StyledComponents/SectionBase";
import Refugees from "../components/Refugees"

const Home = () => {
  return (
    <Layout>
      <Flex justifyContent="space-between" alignItems="center" flexDirection="column">
        <SectionBase flexDirection="column">
          
          <Refugees/>
        
        </SectionBase>


        <InfoBox heading="Flyktningstatistikk" year="2021" info="React, Highcharts, Javascript"></InfoBox>
        
      </Flex>
    </Layout>
    
  )
}

export default Home;