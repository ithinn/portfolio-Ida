const theme = {
    space: [
        0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem'
    ],
    fontSizes: {
        xl: '3.4rem',
        lg: '3rem',
        md: '2rem',
        sm: '1.3rem',
        txt: "1rem"   
    },

    fonts: {
        main: "frank-new",

    },
    fontWeights: [
        0, 200, 400, 600, 900
    ],
    colors: {
   
    },
    letterSpacings: [
        0, "1px", "2px", "3px"
    ],
    lineHeights: [
        1, 1.5, 2
    ],
    borders: {
        element: "2px solid #346f83",
        subElement: "2px solid #a62d2d",
        article: "4px solid #346f83",
        error: "2px solid red"
    },
    radii: {
        round: "50%",
        rounded: "30px"

    },
    shadows: {
        coloredHeading: "4px 5px 1px #103f3f",
        whiteHeading: "4px 5px 1px #d1d1d1",
        card: "0 0 5px 3px rgba(0, 0, 0, .5)"
    },
    zIndices: [
        0,1,2,3
    ],
    breakpoints: [
        '40em', '52em', '64em',
    ],
    variants: {
        Info: {
            width: "80%",
            height: "auto",
            bg: "white",
            boxShadow: "card",
            padding: 3
        },
        column: {
            flexDirection: "column"
        },
        row: {
            flexDirection: "row"
        }
}}
  

export default theme;
