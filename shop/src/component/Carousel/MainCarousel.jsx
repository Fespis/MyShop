import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import shuffleArray from "../../functions/shuffleArray";
import mainBannersData from "../../data/carouselData/mainCarouseData";

function Banner({ image, mobileImage }) {
  const mobile = useMediaQuery(`(max-width: 700px)`);

  return (
    <Link to='/develop'>
      <Image
        sx={{ cursor: "pointer" }}
        height={mobile ? 250 : 500}
        src={mobile ? mobileImage : image}
        fit='fill'
        alt='Random image'
      />
    </Link>
  );
}

export function MainCarousel() {
  const theme = useMantineTheme();
  const slides = shuffleArray(mainBannersData).map((item) => (
    <Carousel.Slide key={item.id}>
      <Banner {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel
        slideSize={"100%"}
        slidesToScroll={1}
        slideGap='xs'
        withIndicators={true}
        withControls={true}
        draggable={true}
        align='start'
        loop
      >
        {slides}
      </Carousel>
    </>
  );
}

export default MainCarousel;
