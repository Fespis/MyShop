import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Stack,
  Title,
  Autocomplete,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconShoppingCart,
  IconLogin,
  IconUserCircle,
  IconSearch,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 400,
    fontSize: "1.1rem",

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function HeaderMobileMenu(props) {
  const { classes, theme } = useStyles();

  return (
    <Drawer
      opened={props.openedMobileMenu}
      onClose={() => props.setOpenedMobileMenu(false)}
      position="top"
      padding="md"
      size={"55%"}
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      title="Разделы"
      sx={{ fontWeight: 500, fontSize: "1.2rem" }}
    >
      <ScrollArea sx={{ height: "calc(100vh - 60px)" }} px="xl" mx="-xl">
        <Autocomplete
          className={classes.search}
          placeholder="Поиск"
          icon={<IconSearch size={16} stroke={1.5} />}
          data={["Смартфоны", "Телевизоры", "Видеокамеры", "Ноутбуки"]}
        />
        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />
        <Text className={classes.link}>Корзина</Text>
        <Text className={classes.link}>Профиль</Text>
        <Text className={classes.link}>Акции</Text>
        <Text className={classes.link}>Блог</Text>
        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />
        <Group position="center" grow pb="xl">
          <Button variant="default">Войти</Button>
          <Button>Регистрация</Button>
        </Group>
      </ScrollArea>
    </Drawer>
  );
}

export default HeaderMobileMenu;
