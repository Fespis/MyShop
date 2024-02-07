import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { createStyles, Text, useMantineTheme, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import carouselBannersData from "../../data/carouselData/carouselBannersData";

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

  linkDisableTitle: {
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "1.5rem",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginTop: theme.spacing.xs,
    transition: "all .2s ease",
    "&:hover": {
      color: "#82c91e",
    },
  },
}));

function Banner({ image }) {
  const theme = useMantineTheme();

  return (
    <Link to='/develop'>
      <Image sx={{ cursor: "pointer" }} src={image} alt='Random image' />
    </Link>
  );
}

export function CarouselBanners() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const { classes } = useStyles();

  const slides = carouselBannersData.map((item) => (
    <Carousel.Slide key={item.id}>
      <Banner {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Link to='/develop' className={classes.linkDisableTitle}>
        Акции
      </Link>
      <Carousel
        slideSize='33.3333%'
        slidesToScroll={mobile ? 1 : 0}
        slideGap='xs'
        withIndicators={mobile ? true : false}
        withControls={false}
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
            slideSize: "33.33333%",
            slidesToScroll: 1,
          },
          {
            maxWidth: "xl",
            slideSize: "33.33333%",
            slidesToScroll: 1,
          },
        ]}
        align='start'
        loop
      >
        {slides}
      </Carousel>
    </>
  );
}

export default CarouselBanners;
