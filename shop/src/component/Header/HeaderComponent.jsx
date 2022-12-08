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
  Drawer,
  Button,
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
import { Link } from "react-router-dom";
import HeaderMobileMenu from "./HeaderMobileMenu";

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
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 2px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "#fff",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },

  linkDisable: {
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "1rem",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    "&:hover": {
      textDecoration: "underline",
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

  burgerMobile: {
    display: "none",
    height: 36,
    cursor: "pointer",
    [theme.fn.smallerThan("sm")]: {
      display: "block",
    },
    "& span": {
      margin: 0,
    },
  },
}));

const links = [
  {
    link: "/develop",
    label: "Корзина",
    icon: <IconShoppingCart></IconShoppingCart>,
  },
  {
    link: "/develop",
    label: "Профиль",
    icon: <IconUserCircle></IconUserCircle>,
  },
  {
    link: "/develop",
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
  const [openedMobileMenu, setOpenedMobileMenu] = useState(false);
  const [heightHeader, setHeightHeader] = useState(0);

  const refHeader = useRef();

  useEffect(() => {
    setHeightHeader(getHeightElement(refHeader));
  }, []);

  function getHeightElement(ref) {
    return ref.current.clientHeight;
  }

  const items = links.map((linkItem) => (
    <Button
      key={linkItem.label}
      variant="gradient"
      gradient={{ from: "teal", to: "lime", deg: 105 }}
    >
      {linkItem.icon}
      <Link to={linkItem.link} className={classes.link}>
        {linkItem.label}
      </Link>
    </Button>
  ));

  return (
    <>
      <Container sx={{ height: heightHeader }}></Container>
      <Header ref={refHeader} className={classes.header} mb={30}>
        <Group position="apart" className={classes.paddingLeftRight}>
          <Group>
            {/* <Burger opened={opened} onClick={toggle} size="sm" /> */}
            <Link to="/">
              <Image
                width={100}
                height={70}
                fit="contain"
                src="https://static.insales-cdn.com/files/1/3373/16379181/original/Component_22.png"
                withPlaceholder
              />
            </Link>
            {/* <Badge
              sx={{ width: 160, height: 36, cursor: "pointer" }}
              radius="xs"
              variant="gradient"
              onClick={() => setOpenedCatalog((open) => !open)}
              leftSection={<Burger opened={openedCatalog} color="#ffffff" />}
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
              <Text size="sm">Каталог</Text>
            </Badge> */}
            <Autocomplete
              className={classes.search}
              placeholder="Поиск"
              icon={<IconSearch size={16} stroke={1.5} />}
              data={["Смартфоны", "Телевизоры", "Видеокамеры", "Ноутбуки"]}
            />
          </Group>

          <Group>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            <HeaderMobileMenu
              openedMobileMenu={openedMobileMenu}
              setOpenedMobileMenu={setOpenedMobileMenu}
            ></HeaderMobileMenu>
            <Badge
              radius="xs"
              variant="gradient"
              onClick={() => setOpenedMobileMenu((open) => !open)}
              leftSection={
                <Burger
                  opened={openedMobileMenu}
                  color="#ffffff"
                  sx={{ margin: 0 }}
                />
              }
              gradient={{ from: "teal", to: "lime", deg: 105 }}
              className={classes.burgerMobile}
            ></Badge>
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
                <Link
                  to="/develop"
                  className={classes.linkDisable}
                  sx={{ whiteSpace: "nowrap", padding: "5px 0" }}
                  key={category}
                >
                  {category}
                </Link>
              );
            })}
          </Group>
        </Container>
      </Header>
    </>
  );
}

export default HeaderSearch;
