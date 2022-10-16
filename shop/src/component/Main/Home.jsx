import {
  AppShell,
  Navbar,
  Header,
  Image,
  Button,
  Burger,
  TextInput,
  Group,
  Badge,
  Text,
  Tooltip,
  Box,
  Container,
  Card,
  Stack,
  Grid,
  Aside,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";

function Home() {
  const PRIMARY_COL_HEIGHT = 300;

  const theme = useMantineTheme();
  console.log(theme);
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md" sx={{ maxWidth: 1620 }}>
      <SimpleGrid
        cols={4}
        spacing="xl"
        breakpoints={[
          { maxWidth: "xl", cols: 4 },
          { maxWidth: "md", cols: 3 },
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
      >
        <Image
          height={PRIMARY_COL_HEIGHT}
          radius="md"
          alt="Random unsplash image"
        />

        <Grid gutter="md">
          <Grid.Col>
            <Image
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
              alt="Random unsplash image"
            />
          </Grid.Col>
          <Grid.Col>
            <Image
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
              alt="Random unsplash image"
            />
          </Grid.Col>
        </Grid>
        <Grid gutter="md">
          <Grid.Col>
            <Image
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
              alt="Random unsplash image"
            />
          </Grid.Col>
          <Grid.Col>
            <Image
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
              alt="Random unsplash image"
            />
          </Grid.Col>
        </Grid>
        <Grid gutter="md">
          <Grid.Col>
            <Image
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
              alt="Random unsplash image"
            />
          </Grid.Col>
          <Grid.Col>
            <Image
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
              alt="Random unsplash image"
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default Home;
