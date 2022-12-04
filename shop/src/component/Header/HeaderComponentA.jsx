import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
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
}));

const links = [
  {
    link: "/profile",
    label: "Профиль",
  },
  {
    link: "/basket",
    label: "Корзина",
  },
  {
    link: "/login",
    label: "Войти",
  },
  {
    link: "/signup",
    label: "Регистрация",
  },
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56} className={classes.header} mb={30}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Image
            width={100}
            height={70}
            fit="contain"
            src="https://static.insales-cdn.com/files/1/3373/16379181/original/Component_22.png"
            withPlaceholder
          />
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Поиск"
            icon={<IconSearch size={16} stroke={1.5} />}
            data={["Смартфоны", "Телевизоры", "Видеокамеры", "Ноутбуки"]}
          />
        </Group>
      </div>
    </Header>
  );
}

export default HeaderSearch;
