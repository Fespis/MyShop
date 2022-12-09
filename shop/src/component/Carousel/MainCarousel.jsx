import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import shuffleArray from "../../functions/shuffleArray";

function Banner({ image, mobileImage }) {
  const mobile = useMediaQuery(`(max-width: 700px)`);

  return (
    <Link to="/develop">
      <Image
        sx={{ cursor: "pointer" }}
        height={mobile ? 250 : 500}
        src={mobile ? mobileImage : image}
        fit="fill"
        alt="Random image"
      />
    </Link>
  );
}

const mainBannersData = [
  {
    id: 1,
    mobileImage:
      "https://sun9-71.userapi.com/impg/6ynr6cFLtEqMSEWSoy2fxq3VrpynXE1EjtH3Pg/6e2BViT9VxQ.jpg?size=480x320&quality=95&sign=8ae57e7a81a8706f2b4c43df1a3786b7&type=album",
    image:
      "https://img.5element.by/upload/rk/778/77859834259a52ce699593faf9b4dea8.jpg",
  },
  {
    id: 2,
    mobileImage:
      "https://img.5element.by/upload/rk/8a9/8a95cba4a0f959c85d7c3f15ea91c4ff.jpg",
    image:
      "https://img.5element.by/upload/rk/698/6989dad10df67778ba4a2ce64a481671.jpg",
  },
  {
    id: 3,
    mobileImage:
      "https://sun9-29.userapi.com/impg/wgD5MwdztxoemqYswgdc1BohO8RPlNldRHHecA/rhPB6yMlkSk.jpg?size=480x320&quality=95&sign=b803806eb6bfc45eb3a33573ac50ed59&type=album",
    image:
      "https://img.5element.by/upload/rk/5b2/5b2d403df9ee82b0c18703e82311a05a.jpg",
  },
];

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
        slideGap="xs"
        withIndicators={true}
        withControls={true}
        draggable={true}
        align="start"
        loop
      >
        {slides}
      </Carousel>
    </>
  );
}

export default MainCarousel;
