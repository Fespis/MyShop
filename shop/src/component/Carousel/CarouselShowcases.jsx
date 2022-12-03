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
  Stack,
  Paper,
  Title,
  Button,
  Divider,
} from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  // card: {
  //   height: 175,
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // },
  // title: {
  //   fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  //   fontWeight: 400,
  //   color: theme.black,
  //   fontSize: 16,
  //   marginTop: theme.spacing.xs,
  // },
  // price: {
  //   color: theme.black,
  //   opacity: 0.7,
  //   fontWeight: 700,
  //   fontSize: 24,
  //   textTransform: "uppercase",
  // },
  // maxWidthClass: {
  //   width: "100%",
  // },
}));

function Showcases({ image, title, category, price }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xl}px)`);

  return (
    <Paper shadow="md" p="xl" radius="xs" className={classes.card}>
      <Group position="apart" spacing="xs" className={classes.maxWidthClass}>
        <Image
          width={100}
          height={125}
          sx={{ maxWidth: 100 }}
          fit="contain"
          radius="md"
          src={image}
          alt="Random image"
        />
        <Stack
          align="center"
          justify="space-between"
          sx={{ maxWidth: 210, height: "100%" }}
        >
          <Text lineClamp={2} className={classes.title}>
            {title}
          </Text>
          <Group position="apart" className={classes.maxWidthClass}>
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
      </Group>

      <Stack justify="space-between" className={classes.maxWidthClass}></Stack>
    </Paper>
  );
}

const slideData = [
  {
    category: "Смартфоны",
    goods: [
      {
        image:
          "https://static.insales-cdn.com/r/893xLRXMbrU/rs:fit:140:0:1/plain/images/products/1/3803/414199515/compact_sm_215_galaxya21s_black_front_raw.jpg@webp",
        title: "Смартфон Xiaomi F1",
        price: "899",
      },
      {
        image:
          "https://static.insales-cdn.com/r/96bGYLn8AE8/rs:fit:400:0:1/q:100/plain/images/products/1/3723/414199435/large_12__1_.jpg@webp",
        title: "Смартфон Siaomi Nokia F1",
        price: "899",
      },
      {
        image:
          "https://static.insales-cdn.com/r/-Vz4S3vnVow/rs:fit:400:0:1/q:100/plain/images/products/1/3639/414199351/large_sm_a515_galaxya51_white_front_raw__1_.jpg@webp",
        title: "Смартфон Ksiaomi WTF",
        price: "899",
      },
    ],
  },
  {
    category: "Ноутбуки",
    goods: [
      {
        image:
          "https://static.insales-cdn.com/r/pyq0Flm8VOY/rs:fit:140:0:1/plain/images/products/1/7819/493133451/compact_1.webp",
        title: "Ноутбуки ASUS Giotaro",
        price: "1500",
      },
      {
        image:
          "https://static.insales-cdn.com/r/tFDzh6qF2Ug/rs:fit:400:0:1/q:100/plain/images/products/1/6391/493140215/large_1.webp",
        title: "Ноутбуки ASUS Dio",
        price: "1975",
      },
      {
        image:
          "https://static.insales-cdn.com/r/gLnPG2Vv1YY/rs:fit:400:0:1/q:100/plain/images/products/1/2716/493152924/large_1.webp",
        title: "Ноутбуки ASUS Rog Fight",
        price: "2130",
      },
    ],
  },
  {
    category: "Телевизоры",
    goods: [
      {
        image:
          "https://static.insales-cdn.com/r/qtnOWPh5oaM/rs:fit:400:0:1/q:100/plain/images/products/1/1399/492660087/large_1.webp",
        title: "Телевизор Zekka Adia",
        price: "720",
      },
      {
        image:
          "https://static.insales-cdn.com/r/X8L6Psvoxjo/rs:fit:400:0:1/q:100/plain/images/products/1/5281/492647585/large_1.webp",
        title: "Телевизор Porshe Caien",
        price: "1860",
      },
      {
        image:
          "https://static.insales-cdn.com/r/TTmNoflBLbI/rs:fit:400:0:1/q:100/plain/images/products/1/5514/492664202/large_1.webp",
        title: "Телевизор Samsung Zero",
        price: "1250",
      },
    ],
  },
];

export function CarouselShowcases() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  return (
    <>
      <Carousel
        slideSize={1480 / 3 - 5}
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
        ]}
        align="start"
        loop
      >
        {slideData.map((item) => {
          return (
            <Carousel.Slide key={item.category}>
              <Text
                variant="outline"
                sx={{ fontWeight: 500, fontSize: "1.5rem" }}
              >
                {item.category}
              </Text>
              <Divider my="sm" sx={{ paddingBottom: 10 }} />
              <Stack>
                <Showcases {...item.goods[0]} />
                <Showcases {...item.goods[1]} />
                <Showcases {...item.goods[2]} />
              </Stack>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
}

export default CarouselShowcases;
// "xs 575" | "sm" | "md" | "lg" | "xl";
