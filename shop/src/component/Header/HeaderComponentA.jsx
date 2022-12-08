import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  Image,
  Badge,
  Text,
  Stack,
  Container,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconShoppingCart,
  IconLogin,
  IconUserCircle,
  IconSearch,
} from "@tabler/icons";
import { useEffect } from "react";
import { useRef, useState } from "react";

const useStyles = createStyles((theme) => ({
  header: {
    position: "fixed",
    top: 0,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan(400)]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  bottomLink: {
    padding: 0,
    maxWidth: 1480,
    width: "100%",
    height: 50,
    [theme.fn.smallerThan("1480")]: {
      minWidth: "100wv",
      maxWidth: "100wv",
    },
  },

  bottomLinkList: {
    minWidth: "max-content",
    width: "100%",
    height: "100%",
    gap: 50,
    fontWeight: 400,
    fontSize: "1rem",
    overflowY: "hidden",
    [theme.fn.smallerThan("1480")]: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
  },

  paddingLeftRight: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  borderColor: {
    backgroundColor: `${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));

const links = [
  {
    link: "/basket",
    label: "Корзина",
    icon: <IconShoppingCart></IconShoppingCart>,
  },
  {
    link: "/profile",
    label: "Профиль",
    icon: <IconUserCircle></IconUserCircle>,
  },
  {
    link: "/login",
    label: "Вход",
    icon: <IconLogin></IconLogin>,
  },
];

const categoryGoods = [
  "Акции",
  "Наушники",
  "Игровая переферия",
  "Смартфоны и планшеты",
  "Компьютеры и ноутбуки",
  "Фотокамеры и видеокамеры",
  "Телевизоры и гарнитура",
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const [openedCatalog, setOpenedCatalog] = useState(false);
  const [heightHeader, setHeightHeader] = useState(0);

  const refHeader = useRef();

  useEffect(() => {
    setHeightHeader(getHeightElement(refHeader));
  }, []);

  function getHeightElement(ref) {
    return ref.current.clientHeight;
  }

  const items = links.map((link) => (
    <Stack key={link.label} align="center" spacing="0">
      {link.icon}
      <a
        href={link.link}
        onClick={(event) => event.preventDefault()}
        className={classes.link}
      >
        {link.label}
      </a>
    </Stack>
  ));

  return (
    <>
      <Container sx={{ height: heightHeader }}></Container>
      <Header ref={refHeader} className={classes.header} mb={30}>
        <Group position="apart" className={classes.paddingLeftRight}>
          <Group>
            {/* <Burger opened={opened} onClick={toggle} size="sm" /> */}
            <Image
              width={100}
              height={70}
              fit="contain"
              src="https://static.insales-cdn.com/files/1/3373/16379181/original/Component_22.png"
              withPlaceholder
            />
            <Badge
              sx={{ width: 160, height: 36, cursor: "pointer" }}
              radius="xs"
              variant="gradient"
              onClick={() => setOpenedCatalog((open) => !open)}
              leftSection={<Burger opened={openedCatalog} color="#ffffff" />}
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
              <Text size="sm">Каталог</Text>
            </Badge>
            <Autocomplete
              className={classes.search}
              placeholder="Поиск"
              icon={<IconSearch size={16} stroke={1.5} />}
              data={["Смартфоны", "Телевизоры", "Видеокамеры", "Ноутбуки"]}
            />
          </Group>

          <Group>
            <Group ml={50} spacing={5} className={classes.links}>
              {items}
            </Group>
          </Group>
        </Group>
        <Divider size="xs" className={classes.borderColor} />
        <Container className={classes.bottomLink} sx={{ overflowX: "auto" }}>
          <Group
            position="apart"
            className={classes.bottomLinkList}
            style={{
              minWidth: "max-content",
              width: "100%",
              overflowY: "hidden",
              gap: 50,
            }}
          >
            {categoryGoods.map((category) => {
              return (
                <Text
                  sx={{ whiteSpace: "nowrap", padding: "5px 0" }}
                  key={category}
                >
                  {category}
                </Text>
              );
            })}
          </Group>
        </Container>
      </Header>
    </>
  );
}

export default HeaderSearch;
