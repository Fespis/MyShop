import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Button,
  useMantineTheme,
  Image,
  Stack,
  Group,
} from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    marginBottom: 10,
    height: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  maxWidthHeight: {
    width: "100%",
    height: "100%",
  },

  linkDisable: {
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "1rem",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginTop: theme.spacing.xs,
    transition: "all .2s ease",
    "&:hover": {
      color: "#82c91e",
    },
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

function Card({ image, title, category, price }) {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" p="xl" radius="xs" className={classes.card}>
      <Image
        width={173}
        height={173}
        fit="contain"
        radius="md"
        src={image}
        alt="Random image"
      />
      <Stack justify="space-between" className={classes.maxWidthHeight}>
        <Link
          to="/develop"
          className={classes.linkDisable}
          sx={{ fontSize: "1.1rem" }}
        >
          <Text lineClamp={2}>{title}</Text>
        </Link>
        <Group position="apart">
          <Text sx={{ fontSize: "1.5rem" }}>
            {price}
            <Text span sx={{ fontSize: "1.1rem" }}>
              .00
            </Text>
          </Text>
          <Button color="lime" radius="xs">
            <IconShoppingCart />
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
}

export function CardsCarousel(props) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const slides = props.goodsData.goods.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Link
        to="/develop"
        className={classes.linkDisableTitle}
        sx={{ fontWeight: 500, fontSize: "1.2rem" }}
      >
        {props.goodsData.category}
      </Link>
      <Carousel
        slideSize="16.666666666%"
        breakpoints={[
          { maxWidth: "sm", slideSize: "50%" },
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "xs", slideSize: "60%", slidesToScroll: 1 },
        ]}
        slideGap="md"
        align="start"
        loop
        slidesToScroll={mobile ? 1 : 2}
        withControls={false}
      >
        {slides}
      </Carousel>
    </>
  );
}

export default CardsCarousel;
