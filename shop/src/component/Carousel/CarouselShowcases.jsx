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
  Box,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  maxWidth: {
    width: "100%",
  },
  maxHeight: {
    height: "100%",
  },
}));

function Showcases({ image, title, category, price }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xl}px)`);

  return (
    <Paper
      shadow="xl"
      p="xl"
      radius="xs"
      sx={{ border: "1px solid #0000001a", height: 220 }}
    >
      <Group position="apart" grow sx={{ height: 120 }}>
        <Image
          width={"6rem"}
          height={150}
          sx={{ maxWidth: 100 }}
          fit="contain"
          radius="md"
          src={image}
          alt="Random image"
        />

        <Stack
          align="center"
          justify="space-between"
          className={classes.maxHeight}
        >
          <Group position="right" className={classes.maxWidth}>
            <Text sx={{ fontSize: "1.1rem" }} lineClamp={2}>
              {title}
            </Text>
          </Group>

          <Stack className={classes.maxWidth}>
            <Text sx={{ fontSize: "1.5rem" }}>
              {price}
              <Text span sx={{ fontSize: "1.1rem" }}>
                .00
              </Text>
            </Text>
            <Button color="lime" radius="xs">
              <IconShoppingCart />
            </Button>
          </Stack>
        </Stack>
      </Group>
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
        title: "Смартфон Samsung Galaxy A12 32GB Black (SM-A125F)",
        price: "1200",
      },
      {
        image:
          "https://static.insales-cdn.com/r/96bGYLn8AE8/rs:fit:400:0:1/q:100/plain/images/products/1/3723/414199435/large_12__1_.jpg@webp",
        title: "Смартфон Samsung Galaxy S21 128GB (SM-G991B)",
        price: "1300",
      },
      {
        image:
          "https://static.insales-cdn.com/r/-Vz4S3vnVow/rs:fit:400:0:1/q:100/plain/images/products/1/3639/414199351/large_sm_a515_galaxya51_white_front_raw__1_.jpg@webp",
        title: "Смартфон Samsung Galaxy S21 256GB (SM-G991B)",
        price: "560",
      },
    ],
  },
  {
    category: "Ноутбуки",
    goods: [
      {
        image:
          "https://static.insales-cdn.com/r/pyq0Flm8VOY/rs:fit:140:0:1/plain/images/products/1/7819/493133451/compact_1.webp",
        title: `14.1" Ноутбук Haier A1410EM, Intel Celeron N4000 (1.1 ГГц), RAM 4 ГБ, eMMC 64 ГБ, Intel HD Graphics 600, Windows 10 Home, (JM02VHE08RU)`,
        price: "1500",
      },
      {
        image:
          "https://static.insales-cdn.com/r/tFDzh6qF2Ug/rs:fit:400:0:1/q:100/plain/images/products/1/6391/493140215/large_1.webp",
        title: `14" Ноутбук ASUS VivoBook X415JA-EK220T, Intel Core i5-1035G1 (1.0 ГГц)`,
        price: "1975",
      },
      {
        image:
          "https://static.insales-cdn.com/r/gLnPG2Vv1YY/rs:fit:400:0:1/q:100/plain/images/products/1/2716/493152924/large_1.webp",
        title: `16.1" Ноутбук Honor MagicBook Pro, AMD Ryzen 5 4600H (3.0 ГГц)`,
        price: "2130",
      },
    ],
  },
  {
    category: "Видеокамеры",
    goods: [
      {
        image:
          "https://static.insales-cdn.com/r/B2O8ckK-FJQ/rs:fit:400:0:1/q:100/plain/images/products/1/5041/494138289/large_1.webp",
        title: "Panasonic HC-V270, Black цифровая видеокамера",
        price: "720",
      },
      {
        image:
          "https://static.insales-cdn.com/r/JiIZIJUhBt4/rs:fit:400:0:1/q:100/plain/images/products/1/2408/494135656/large_1.webp",
        title: "Видеокамера Panasonic HC-V770, Black",
        price: "18600",
      },
      {
        image:
          "https://static.insales-cdn.com/r/rXoo7sJuehk/rs:fit:400:0:1/q:100/plain/images/products/1/7299/494140547/large_1.webp",
        title:
          "Экшн-камера GoPro Экшн-камера GoPro Hero 9 Black Edition CHDHX-901-RW, черный",
        price: "1250",
      },
    ],
  },
  {
    category: "Телевизоры",
    goods: [
      {
        image:
          "https://static.insales-cdn.com/r/qtnOWPh5oaM/rs:fit:400:0:1/q:100/plain/images/products/1/1399/492660087/large_1.webp",
        title: `Ultra HD Телевизор Philips 50PUS7506/60 50"`,
        price: "720",
      },
      {
        image:
          "https://static.insales-cdn.com/r/X8L6Psvoxjo/rs:fit:400:0:1/q:100/plain/images/products/1/5281/492647585/large_1.webp",
        title: `4K UHD Телевизор Samsung UE70AU7100UXRU 70"`,
        price: "1860",
      },
      {
        image:
          "https://static.insales-cdn.com/r/TTmNoflBLbI/rs:fit:400:0:1/q:100/plain/images/products/1/5514/492664202/large_1.webp",
        title: `HD Телевизор ECON Безрамочный SMART 39" Linux с цифровым тюнером DVB-T2/DVB-C, модулем WI-FI и USB медиаплеером с поддержкой MKV видео 39"`,
        price: "1250",
      },
    ],
  },
];

export function CarouselShowcases() {
  const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const mobile = useMediaQuery(`(max-width: 1510px)`);
  return (
    <>
      <Carousel
        slideSize={1480 / slideData.length - 8}
        slideGap="xs"
        slidesToScroll={mobile ? 1 : 0}
        withControls={mobile ? true : false}
        draggable={mobile ? true : false}
        loop={mobile ? true : false}
        breakpoints={[
          {
            maxWidth: "xs",
            slideSize: "100%",
          },
          {
            maxWidth: "md",
            slideSize: "48.8%",
          },
          {
            maxWidth: 1510,
            slideSize: "32.5%",
            loop: true,
          },
        ]}
        align="start"
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
{
  /* <Group
position="apart"
spacing="xs"
className={classes.maxWidth}
sx={{ height: 120 }}
>
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
  className={classes.maxHeight}
>
  <Text lineClamp={1}>
    {title}
  </Text>
  <Group position="right" className={classes.maxWidth}>
    <Title order={3}>
      {price}
      <Text span sx={{ fontSize: 14 }}>
        .00
      </Text>
    </Title>
    <Button color="lime" radius="xs">
      <IconShoppingCart />
    </Button>
  </Group>
</Stack>
</Group> */
}
