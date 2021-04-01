import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import { Flex, Box} from "reflexbox";
import utilStyles from "../../styles/utils.module.css"

const Slideshow = ({array}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autplay: true,
   

    };


    const mappedSlides = array.map((img, index) => {

        return(
            <Box>
                <Image
                    src={img}
                    width={1500}
                    height={850}
                    className={utilStyles.mock}
                    >
                </Image>
            </Box>
        )
    })

    return (
       <Box width="70%" height="auto">
        <Slider {...settings}>
            {mappedSlides}
        </Slider>
        </Box>
    )
}

export default Slideshow;
