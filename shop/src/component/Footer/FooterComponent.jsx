import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Image,
  useMantineTheme,
  Accordion,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 80,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 2,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      marginTop: 50,
    },
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  wrapper: {
    width: 160,
    [theme.fn.smallerThan("sm")]: {
      width: "inherit",
      textAlign: "center",
    },
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: "1rem",
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontWeight: 500,
    fontSize: "1.2rem",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },

  root: {
    width: "inherit",
    borderRadius: theme.radius.sm,
  },
}));

const data = [
  {
    title: "О магазине",
    links: [
      {
        label: "Условия обмена и возврата",
        link: "#",
      },
      {
        label: "О компании",
        link: "#",
      },
      {
        label: "Контакты",
        link: "#",
      },
      {
        label: "Доставка",
        link: "#",
      },
    ],
  },
  {
    title: "Информация",
    links: [
      {
        label: "Пользовательское соглашение",
        link: "#",
      },
      {
        label: "Политика конфиденциальности",
        link: "#",
      },
    ],
  },
  {
    title: "Для клиентов",
    links: [
      {
        label: "Блог",
        link: "#",
      },
      {
        label: "Обратная связь",
        link: "#",
      },
    ],
  },
];

function FooterComponentA() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm - 1}px)`);

  const groupsDecstop = data.map((group) => {
    const links = group.links.map((link, index) => (
      <>
        <Text
          component="a"
          key={index}
          className={classes.link}
          href={link.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </Text>
      </>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  const groupsMobile = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Accordion.Panel key={index}>
        <Text
          component="a"
          className={classes.link}
          href={link.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </Text>
      </Accordion.Panel>
    ));
    return (
      <Accordion
        mx="auto"
        variant="filled"
        defaultValue="footerLinks"
        className={classes.root}
        key={group.title}
      >
        <Accordion.Item value={group.title} className={classes.wrapper}>
          <Accordion.Control className={classes.title}>
            {group.title}
          </Accordion.Control>
          {links}
        </Accordion.Item>
      </Accordion>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            width={180}
            height={110}
            fit="contain"
            src="https://static.insales-cdn.com/files/1/3373/16379181/original/Component_22.png"
            withPlaceholder
          />
          <Text size="xs" color="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>
          {mobile ? groupsMobile : groupsDecstop}
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default FooterComponentA;
