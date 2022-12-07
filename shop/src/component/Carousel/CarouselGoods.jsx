import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Image,
  Stack,
  Group,
} from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons";

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

  title: {
    marginTop: theme.spacing.xs,
  },

  maxWidthHeight: {
    width: "100%",
    height: "100%",
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
        <Text
          className={classes.title}
          sx={{ fontSize: "1.1rem" }}
          lineClamp={2}
        >
          {title}
        </Text>
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
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const slides = props.goodsData.goods.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Text variant="outline" sx={{ fontWeight: 500, fontSize: "1.5rem" }}>
        Смартфоны
      </Text>
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
