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
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons";
import { Link } from "react-router-dom";
import footerCategoryInfo from "../../data/footerCategoryLinks";

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
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: "1rem",
    paddingTop: 3,
    paddingBottom: 3,
    textDecoration: "none",
    transition: "all .2s ease",
    "&:hover": {
      color: "#82c91e",
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

function FooterComponent() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm - 1}px)`);

  const groupsDesktop = footerCategoryInfo.map((group) => {
    const links = group.links.map((link, index) => (
      <>
        <Link key={index} className={classes.link} to='/develop'>
          {link.label}
        </Link>
      </>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  const groupsMobile = footerCategoryInfo.map((group) => {
    const links = group.links.map((link, index) => (
      <Accordion.Panel key={index}>
        <Link className={classes.link} to='/develop'>
          {link.label}
        </Link>
      </Accordion.Panel>
    ));

    return (
      <Accordion
        mx='auto'
        variant='filled'
        defaultValue='footerLinks'
        className={classes.root}
        key={group.title}
      >
        <Accordion.Item value={group.title} className={classes.wrapper}>
          <Accordion.Control className={classes.title}>{group.title}</Accordion.Control>
          {links}
        </Accordion.Item>
      </Accordion>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Link to='/'>
            <Image
              width={180}
              height={110}
              fit='contain'
              src='https://static.insales-cdn.com/files/1/3373/16379181/original/Component_22.png'
              withPlaceholder
            />
          </Link>
          <Text size='xs' color='dimmed' className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{mobile ? groupsMobile : groupsDesktop}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color='dimmed' size='sm'>
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position='right' noWrap>
          <a href='https://www.linkedin.com/in/fespis/'>
            <ActionIcon size='lg'>
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href='https://github.com/Fespis'>
            <ActionIcon size='lg'>
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </footer>
  );
}

export default FooterComponent;
