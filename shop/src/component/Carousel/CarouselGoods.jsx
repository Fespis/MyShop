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
      <Stack justify="space-between" className={classes.description}>
        <Text order={3} className={classes.title}>
          {title}
        </Text>
        <Group position="apart">
          <Title className={classes.price} size="xs">
            {price}
            <Text span sx={{ fontSize: 13 }}>
              .00
            </Text>
          </Title>
          <Button color="lime" radius="xs">
            <IconShoppingCart />
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
}

const data = [
  {
    image:
      "https://static.insales-cdn.com/r/WVlQE-v_hho/rs:fit:400:0:1/q:100/plain/images/products/1/3803/414199515/large_sm_215_galaxya21s_black_front_raw.jpg@webp",
    title: "Смартфон Samsung Galaxy A12 32GB Black (SM-A125F)",
    category: "Смартфон",
    price: "899",
  },
  {
    image:
      "https://static.insales-cdn.com/r/3oGP0Ng_PRs/rs:fit:400:0:1/q:100/plain/images/products/1/2927/414198639/large_11__1_.jpg@webp",
    title: "Смартфон Samsung Galaxy S21 128GB (SM-G991B)",
    category: "Смартфон",
    price: "1100",
  },
  {
    image:
      "https://static.insales-cdn.com/r/96bGYLn8AE8/rs:fit:400:0:1/q:100/plain/images/products/1/3723/414199435/large_12__1_.jpg@webp",
    title: "Смартфон Samsung Galaxy S21 256GB (SM-G991B)",
    category: "Смартфон",
    price: "1169",
  },
  {
    image:
      "https://static.insales-cdn.com/r/UeuMqKFKWFk/rs:fit:400:0:1/q:100/plain/images/products/1/4034/414199746/large_ae-galaxy-m31-m315-sm-m315fzkvxsg-frontblack-214808359.jpg@webp",
    title: "Смартфон Xiaomi Mi 10T 8+128GB Black",
    category: "Смартфон",
    price: "2500",
  },
  {
    image:
      "https://static.insales-cdn.com/r/cYIyc4aNUvU/rs:fit:400:0:1/q:100/plain/images/products/1/3355/414199067/large_sm_a715_galaxya71_black_front_raw__1_.jpg@webp",
    title: "Смартфон Nokia 3.4",
    category: "Смартфон",
    price: "659",
  },
  {
    image:
      "https://static.insales-cdn.com/r/96bGYLn8AE8/rs:fit:400:0:1/q:100/plain/images/products/1/3723/414199435/large_12__1_.jpg@webp",
    title: "Смартфон Xiaomi Redmi 9",
    category: "Смартфон",
    price: "1199",
  },
  {
    image:
      "https://static.insales-cdn.com/r/cYIyc4aNUvU/rs:fit:400:0:1/q:100/plain/images/products/1/3355/414199067/large_sm_a715_galaxya71_black_front_raw__1_.jpg@webp",
    title: "Смартфон Samsung Galaxy A31",
    category: "Смартфон",
    price: "1439",
  },
  {
    image:
      "https://static.insales-cdn.com/r/UeuMqKFKWFk/rs:fit:400:0:1/q:100/plain/images/products/1/4034/414199746/large_ae-galaxy-m31-m315-sm-m315fzkvxsg-frontblack-214808359.jpg@webp",
    title: "Смартфон Samsung Galaxy A51",
    category: "Смартфон",
    price: "1650",
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Text variant="outline" sx={{ fontWeight: 500, fontSize: "1.5rem" }}>
        Смартфоны и планшеты
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
      >
        {slides}
      </Carousel>
    </>
  );
}

export default CardsCarousel;
