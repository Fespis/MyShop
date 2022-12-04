import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { createStyles, Text, useMantineTheme, Image } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: 16,
    marginTop: theme.spacing.xs,
  },

  price: {
    color: theme.black,
    opacity: 0.7,
    fontWeight: 700,
    fontSize: 24,
    textTransform: "uppercase",
  },

  description: {
    width: "100%",
    height: "100%",
  },

  imageBanner: {
    position: "absolute",
    left: 0,
    top: 0,
    minHeight: 500,
  },
}));

function Banner({ image, mobileImage }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: 700px)`);

  return (
    <Image
      sx={{ cursor: "pointer" }}
      // width={"100%"}
      height={mobile ? 250 : 500}
      src={mobile ? mobileImage : image}
      fit="fill"
      alt="Random image"
    />
  );
}

const data = [
  {
    id: 1,
    mobileImage:
      "https://img.5element.by/upload/rk/8a9/8a95cba4a0f959c85d7c3f15ea91c4ff.jpg",
    image:
      "https://img.5element.by/upload/rk/698/6989dad10df67778ba4a2ce64a481671.jpg",
  },
  {
    id: 2,
    mobileImage:
      "https://img.5element.by/upload/rk/778/77859834259a52ce699593faf9b4dea8.jpg",
    image:
      "https://img.5element.by/upload/rk/778/77859834259a52ce699593faf9b4dea8.jpg",
  },
  {
    id: 3,
    mobileImage:
      "https://img.5element.by/upload/rk/5da/5da7aee4d19a64d9758fc91ddd8ac87e.jpg",
    image:
      "https://img.5element.by/upload/rk/5da/5da7aee4d19a64d9758fc91ddd8ac87e.jpg",
  },
];

export function MainCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const slides = data.map((item) => (
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
