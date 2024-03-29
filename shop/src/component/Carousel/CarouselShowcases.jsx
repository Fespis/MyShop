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
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  maxWidth: {
    width: "100%",
  },

  maxHeight: {
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
            <Link to="/develop" className={classes.linkDisable}>
              <Text lineClamp={2}>{title}</Text>
            </Link>
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

export function CarouselShowcases(props) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: 1510px)`);
  return (
    <>
      <Carousel
        slideSize={1480 / props.goodsData.length - 8}
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
        {props.goodsData.map((item) => {
          return (
            <Carousel.Slide key={item.category}>
              <Link to="/develop" className={classes.linkDisableTitle}>
                {item.category}
              </Link>
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
// const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
{
  /* <Badge
              sx={{ width: 160, height: 36, cursor: "pointer" }}
              radius="xs"
              variant="gradient"
              onClick={() => setOpenedCatalog((open) => !open)}
              leftSection={<Burger opened={openedCatalog} color="#ffffff" />}
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
              <Text size="sm">Каталог</Text>
            </Badge> */
}
