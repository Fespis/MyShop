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
    <Container my="md" sx={{ maxWidth: 1480 }}>
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
          src="https://static.insales-cdn.com/r/XwKQypt2ac0/rs:fill-down:547:342:1/q:100/plain/files/1/5894/16365318/original/Component_5-5-min.jpg"
          alt="Random unsplash image"
        />

        <Grid gutter="md">
          <Grid.Col>
            <Image
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              src="https://static.insales-cdn.com/r/H7o2a6XDSMA/rs:fill-down:260:163:1/q:100/plain/files/1/5322/16364746/original/Component_5-3_143e82bedd6e26ac5f9ec8ec65aeb4cd.jpg"
              animate={false}
              alt="Random unsplash image"
            />
          </Grid.Col>
          <Grid.Col>
            <Image
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              src="https://static.insales-cdn.com/r/ObtSC0YvoZA/rs:fill-down:260:163:1/q:100/plain/files/1/5985/17307489/original/Component_5-4-min_4646b7946c16baf088d50f67227c015b.jpg"
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
              src="https://static.insales-cdn.com/r/nHITxemcuwY/rs:fill-down:260:163:1/q:100/plain/files/1/5982/17307486/original/2.jpg"
              animate={false}
              alt="Random unsplash image"
            />
          </Grid.Col>
          <Grid.Col>
            <Image
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              src="https://static.insales-cdn.com/r/OvLG9xzNtcI/rs:fill-down:260:163:1/q:100/plain/files/1/5987/17307491/original/Component_5-3-min_8c6ff87597528878f4c13f8eecf3e0ab.jpg"
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
              src="https://static.insales-cdn.com/r/baDXLQ6ySOM/rs:fill-down:260:163:1/q:100/plain/files/1/5983/17307487/original/Component_5-2-min_a3479b068fde77f382b45c3f7b419e62.jpg"
              animate={false}
              alt="Random unsplash image"
            />
          </Grid.Col>
          <Grid.Col>
            <Image
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              src="https://static.insales-cdn.com/r/2myJcrgmqxs/rs:fill-down:260:163:1/q:100/plain/files/1/5988/17307492/original/Component_5-6-min_91fb6e58be8236a94503b5bf747c1db8.jpg"
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
