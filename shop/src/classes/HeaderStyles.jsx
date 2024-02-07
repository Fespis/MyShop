import { createStyles } from "@mantine/core";

const headerStyles = createStyles((theme) => ({
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

const headerStylesMobile = createStyles((theme) => ({
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
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  limeColor: {
    color: "#82c91e",
  },

  linkDisableWhite: {
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "1.1rem",
    color: theme.white,
  },

  linkDisableBlack: {
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "1.1rem",
    color: theme.black,
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
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

export { headerStyles, headerStylesMobile };
