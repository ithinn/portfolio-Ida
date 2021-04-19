import Image from "next/image"
import { Box, Flex } from "reflexbox";
import { H3, P } from "../Info";

const IconWrapper = () => {
    return(
        <Box mt={5}>
        <H3>Dette har jeg brukt det siste halve året:</H3>
        <Flex flexWrap="wrap">
            <Box m={4}>
                <Image 
                    src="/img/icons/html5-logo-31819.png"
                    alt="logo, HTML, CSS, Javascript"
                    width={200}
                    height={100}
                />
                <P>HTML, CSS og Javascript</P>
            </Box>
            <Box m={4}>
                <Image 
                    src="/img/icons/react.png"
                    alt="logo, React"
                    width={100}
                    height={100}
                />
                <P>React</P>
            </Box>
            <Box m={4}>
                <Image 
                    src="/img/icons/react.png"
                    alt="logo, React"
                    width={100}
                    height={100}
                />
                <P>React Native</P>
            </Box>
            <Box m={4}>
                <Image 
                    src="/img/icons/next.png"
                    alt="logo, next.js"
                    width={120}
                    height={100}
                />
                <P>Next.js</P>
            </Box>
            <Box m={4}>
                <Image 
                    src="/img/icons/firebase-logo-vector.svg"
                    alt="logo, firebase"
                    width={120}
                    height={100}
                />
                <P>Firebase</P>
            </Box>
            <Box m={4}>
                <Image 
                    src="/img/icons/cosmic.png"
                    alt="logo, Cosmic.js"
                    width={100}
                    height={100}
                />
                <P>Cosmic</P>
            </Box>
            <Box m={4}>
                <Image 
                    src="/img/icons/mapboxSq.png"
                    alt="logo, mapbox"
                    width={100}
                    height={100}
                />
                <P>Mapbox</P>
            </Box>
            <Box m={4}>
                <Image 
                    src="/img/icons/highcharts.png"
                    alt="logo, mapbox"
                    width={100}
                    height={100}
                />
                <P>Highcharts</P>
            </Box>
            <Box m={4}>
                <Image 
                    src="/img/icons/GitHubTrans-01.png"
                    alt="logo, mapbox"
                    width={100}
                    height={100}
                />
                <P>Git/GitHub</P>
            </Box>
            <Box m={4} maxWidth={100}>
                <Image 
                    src="/img/icons/illustrator.png"
                    alt="logo, illustrator"
                    width={100}
                    height={100}
                />
                <P>Adobe Illustrator</P>
            </Box>
            <Box m={4} maxWidth={100}>
                <Image 
                    src="/img/icons/photoshop1.png"
                    alt="logo, photoshop"
                    width={100}
                    height={100}
                />
                <P>Adobe Photoshop</P>
            </Box>
            <Box m={4}>
                <Image 
                    src="/img/icons/xd.png"
                    alt="logo, xd"
                    width={100}
                    height={100}
                />
                <P>Adobe Xd</P>
            </Box>
        </Flex>
        </Box>
    )

}

export default IconWrapper