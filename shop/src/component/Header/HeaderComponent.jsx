import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  Image,
  Badge,
  Container,
  Divider,
  Button,
  keyframes,
  Text,
} from "@mantine/core";
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
import { IconDiscount2 } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  header: {
    position: "fixed",
    top: 0,
  },

  headerMargin: {
    marginBottom: 30,
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
    padding: "3px 0",
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "1rem",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    transition: "all .2s ease",
    "&:hover": {
      color: "#82c91e",
    },
  },

  linkDisableMain: {
    padding: "3px 5px",
    display: "flex",
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#82c91e",
    borderRadius: 20,
    background: "#fff",
    transition: "all .2s ease",

    "&:hover": {
      color: "#fff",
      background: "#82c91e",
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
    label: "??????????????",
    icon: <IconShoppingCart></IconShoppingCart>,
  },
  {
    link: "/develop",
    label: "??????????????",
    icon: <IconUserCircle></IconUserCircle>,
  },
  {
    link: "/develop",
    label: "????????",
    icon: <IconLogin></IconLogin>,
  },
];

const categoryGoods = [
  { category: "??????????", icon: <IconDiscount2 /> },
  { category: "????????????????" },
  { category: "?????????????? ??????????????????" },
  { category: "?????????????????? ?? ????????????????" },
  { category: "???????????????????? ?? ????????????????" },
  { category: "???????????????????? ?? ??????????????????????" },
  { category: "???????????????????? ?? ??????????????????" },
];

export function HeaderSearch() {
  const { classes } = useStyles();
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
      <Container
        className={classes.headerMargin}
        sx={{ height: heightHeader }}
      ></Container>
      <Header
        ref={refHeader}
        className={`${classes.header} ${classes.headerMargin}`}
      >
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
            <Autocomplete
              className={classes.search}
              placeholder="??????????"
              icon={<IconSearch size={16} stroke={1.5} />}
              data={["??????????????????", "????????????????????", "??????????????????????", "????????????????"]}
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
            {categoryGoods.map((item) => {
              return (
                <Link
                  to="/develop"
                  className={`${!item.icon && classes.linkDisable} ${
                    item.icon && classes.linkDisableMain
                  }`}
                  style={{
                    whiteSpace: "nowrap",
                  }}
                  key={item.category}
                >
                  {item.icon}
                  <Text>{item.category}</Text>
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
