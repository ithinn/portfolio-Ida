import { Box, Flex } from "reflexbox/styled-components";
import { H1, H2, H3, P, Pitalic, Pleft, Li, NavA, Nav } from "../components/Info";
import Image from "next/image"
import { Section } from "../components/Section";
import utilStyles from "../styles/utils.module.css";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme"
import Layout from "../components/Layout"
import Point from "../components/Point"
import Link from "next/link";
import Wordcloud from "../components/WordCloud";
import List from "../components/List"
import IconWrapper from "../components/IconWrapper";

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
    const telAviv = [
        "Utredning, research og analyse av den politiske situasjonen i Israel",
        'Utarbeidelse av rapporten "Divided Movement: The settlers and the separation barrier in the West Bank"'
    ]

    const myLoader = ({src, width, quality}) => {
        return <Image src="./img/avatar.jpg" width={200} quality={quality || 75}/>
    }

    const courses = [
        "Testival - lær (nesten) alt om brukertesting",
        "Google Analytics",
        "Information Visualization",
        "Microsoft Excel og Adobe Illustrator: Infografikk og diagrammer",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe After Effects",
        "Adobe Premiere Pro",
        "Bildebruk på web og i sosiale medier",
        "Lynkurs for nettredaktører",
        "Prosjektlederen som leder"
    ]





    return(
        <Layout about>
        <Section>
            
            <Flex flexWrap="wrap" justifyContent="center" width="90%" alignItems="center">
                <Flex m={3} p={3} flexDirection="column" alignItems="center">
                    <Image 
                        src="/img/ida_small.jpg" 
                        width={200} 
                        height={200} 
                        className={utilStyles.round}/>
                    <Box>    
                    <P>09.06.1982</P>
                    <P>Tlf. 415 15 385</P>
                    <P>ithinn@gmail.com</P>
                    </Box>
                    <Flex alignItems="flex-start" justifyContent="center" mb={3} flexDirection="column">
                        <Flex alignItems="center" mb={3}>
                            <Image src="/img/gitHubLogo.png" width={30} height={30}/>
                            <Link href="https://github.com/ithinn">
                                <a>Github-profil</a>
                            </Link>
                        </Flex>
                        <Flex alignItems="center" mb={3}>
                            <Image src="/img/icons/linkedin.png" width={30} height={30}/>
                            <Link href="https://www.linkedin.com/in/ida-j%C3%B8rgensen-thinn-30097a2/">
                                <a>LinkedIn-profil</a>
                            </Link>
                        </Flex>
                    </Flex>
               
                </Flex>

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

                <Nav className={utilStyles.sticky} as="nav">
                        <Link href="#courses">
                            <NavA>IT-kompetanse</NavA>
                        </Link>

                        <Link href="#experience">
                            <NavA>Arbeidserfaring</NavA>
                        </Link>

                        <Link href="#education">
                            <NavA >Utdanning</NavA>
                        </Link>  
                </Nav>


            <Flex  flexWrap="wrap" justifyContent="center" width="90%" alignItems="center">
                <Box id="courses" width="100%" mt={5}>
                    <H2 id="courses">IT-kompetanse og kurs</H2>
                    <IconWrapper/>
                    <List array={courses}/>
                </Box>

                <Box id="experience" width="100%" mt={5}>
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

                <Box id="education" width="100%" mt={5}>
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
                        title="Folkerett"
                    />
                    <Point
                        date="08.2008-03.2009" 
                        where="Universitetet i Damaskus/Privatlærer" 
                        title="Arabisk"
                    />
                    <Point
                        date="08.2006-12.2006" 
                        where="Den Kongelige Norske Ambassade i Tel Aviv/Universitetet i Oslo" 
                        title="Internasjonalt prosjektsemester"
                        details={telAviv}
                    />
                    <Point
                        date="08.2002-06.2007" 
                        where="Universitetet i Oslo" 
                        title="Master i Midtøsten- og Nord-Afrikakunnskap"
                        
                    />
                    <Point
                        date="08.1998-06.2001" 
                        where="Bodø Videregående skole" 
                        title="Videregående skole, studieretning for musikk"
                        
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