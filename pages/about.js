import { Box, Flex } from "reflexbox/styled-components";
import { H1, H2, H3, P, Pitalic, Pleft, Li } from "../components/Info";
import Image from "next/image"
import { Section } from "../components/Section";
import utilStyles from "../styles/utils.module.css";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme"
import Layout from "../components/Layout"
import Point from "../components/Point"

const About = () => {
    const fnSambandet = [
        "Webdesign og utviklingsprosjekter på fn.no", 
        "Innholdsutvikling og redaksjonelt arbeid på nett og i sosiale medier", 
        "Utforming av infografikk og interaktiv datavisualisering", 
        "Ansvar for visuell kommunikasjon, visuell profil og materiellutvikling", 
        "Fagansvar for klima, fred og sikkerhet, folkerett, flyktninger og menneskerettigheter", 
        "Utarbeidelse og implementering av klarspråkprofil"
    ];

    const kn = [
        "Rekruttering, opplæring og oppfølging av personell som skulle plasseres/var utplassert i Israel/Palestina",
    ]

    const littHuset = [
        "Ansvarlig for Saladindagene", "Kommunikasjonsarbeid, nyhetsbrev, nettside"
    ]

    const ledsager = [
        "Internasjonal tilstedeværelse i konfliktområde", 
        "Observasjon på kontrollposter, innhenting av vitnemål etter menneskerettighetsbrudd", 
        "Informasjonsarbeid underveis og i etterkant"
    ]

    const atlas = [
        "Faglig ansvarlig for informasjonskampanje om funksjonshemminger og fattigdom",
        "Rekruttering, skolering og koordinering av 30 nasjonale og 20 internasjonale foredragsholdere",
        "Budsjett og regnskap"
    ]

    const lnu = [
        "Ansvarlig for internasjonal ungdomskonferanse med deltakere fra Midtøsten og Europa",
        "Budsjett og regnskapsansvar"
    ]

    const frontend = [
        "Javascript, React",
        "Brukergrensesnitt, responsivt design, animasjon",
        "Apputvikling og kodearkitektur",
        "Universell utforming"
    ]







    return(
        <Layout>
        <Section>
            <Flex flexWrap="wrap" justifyContent="center" width="90%" alignItems="center">
                <Box m={3} p={3}>
                    <Image 
                        src="/img/ida.jpg" 
                        width={200} 
                        height={200} 
                        className={utilStyles.round}/>

                    
                    <P>09.06.1982</P>
                    <P>Tlf. 415 15 385</P>
                    <P>ithinn@gmail.com</P>
                </Box>

                <Box m={3} p={3}>
                    <ul>
                        <Li>Junior frontend-utvikler som også kan designe og brukerteste</Li>
                        <Li>Ni års erfaring med innholdsutvikling og kommunikasjon</Li>
                        <Li>Kan lede prosjekter og lage struktur av kaos</Li>
                        <Li>Opptatt av klarspråk i kode og tekst</Li>
                        <Li>Spesielt interessert i datavisualisering og infografikk</Li>
                    </ul>
                </Box>
            </Flex>

            <Flex flexWrap="wrap" justifyContent="center" width="90%" alignItems="center">
                <Box width="100%">
                    <H2>Arbeidserfaring</H2>
                    <Point 
                        date="2011-dd" 
                        where="FN-sambandet" 
                        title="Kommunikasjonsrådgiver" 
                        details={fnSambandet}/>
                    <Point 
                        date="12.2010-06.2011" 
                        where="Kirkens Nødhjelp" 
                        title="Koordinator - Ledsagerprogrammet" 
                        details={kn}/>
                    <Point 
                        date="12.2010-06.2011" 
                        where="Litteraturhuset i Oslo" 
                        title="Prosjektleder" 
                        details={littHuset}/>
                    <Point 
                        date="01.2010-03.2010" 
                        where="Kirkens Nødhjelp" 
                        title="Ledsager i Israel/Palestina" 
                        details={ledsager}/>
                    <Point 
                        date="04.2009-12.2009" 
                        where="Atlas-alliansen" 
                        title="Prosjektkoordinator - Operasjon Dagsverk" 
                        details={atlas}/>
                    <Point 
                        date="09.2007-06.2008" 
                        where="Landsrådet for Norges barne- og ungdomsorganisasjoner" 
                        title="Prosjektkoordinator" 
                        details={lnu}/>
                </Box>

                <Box width="100%">
                    <H2>Utdanning</H2>
                    <Point
                        date="08.2020-dd" 
                        where="Fagskolen Kristiania" 
                        title="Frontend-utvikling"
                        details={frontend} 
                    />
                    <Point
                        date="01.2013-06.2013" 
                        where="Universitetet i Oslo" 
                        title="Frontend-utvikling"
                        details={frontend} 
                    />

                </Box>
               
           
            </Flex>

            <Flex bgflexWrap="wrap" justifyContent="center" width="90%" alignItems="center">
                <Box>
                    
                </Box>
            </Flex>

        </Section>
        </Layout>
        
    )
}

export default About;