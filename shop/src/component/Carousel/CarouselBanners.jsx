import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Text,
  useMantineTheme,
  Image,
  Group,
  Container,
  SimpleGrid,
} from "@mantine/core";

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
}));

function Banner({ image }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xl}px)`);

  return (
    <Image
      // width={330}
      // height={263}
      sx={{ cursor: "pointer" }}
      src={image}
      alt="Random image"
    />
  );
}

const data = [
  {
    id: 1,
    image:
      "https://static.insales-cdn.com/r/xkW41qoM3xA/rs:fill-down:469:276:1/q:100/plain/files/1/5993/17307497/original/Group_176_1a87304987b60414900d883c05384a7d.jpg",
  },
  {
    id: 2,
    image:
      "https://static.insales-cdn.com/r/UakyJTVS7JI/rs:fill-down:469:276:1/q:100/plain/files/1/6780/16366204/original/Group_180.jpg",
  },
  {
    id: 3,
    image:
      "https://static.insales-cdn.com/r/gJKMvf23MdI/rs:fill-down:469:276:1/q:100/plain/files/1/6782/16366206/original/Group_181.jpg",
  },
];

export function CarouselBanners() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.id}>
      <Banner {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Text variant="outline" sx={{ fontWeight: 500, fontSize: "1.5rem" }}>
        Акции
      </Text>
      <Carousel
        slideSize="33.3333%"
        slidesToScroll={mobile ? 1 : 0}
        slideGap="xs"
        withControls={mobile ? true : false}
        draggable={mobile ? true : false}
        breakpoints={[
          {
            maxWidth: "xs",
            slideSize: "100%",
            slidesToScroll: 1,
            draggable: true,
          },
          {
            maxWidth: "md",
            slideSize: "50%",
            slidesToScroll: 1,
            draggable: true,
          },
          {
            maxWidth: "lg",
            slideSize: "33.33333%%",
            slidesToScroll: 1,
          },
          {
            maxWidth: "xl",
            slideSize: "33.33333%",
            slidesToScroll: 1,
          },
        ]}
        align="start"
        loop
      >
        {slides}
      </Carousel>
    </>
  );
}

export default CarouselBanners;
