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
} from "@mantine/core";

function Home() {
  return (
    <Container
      p="xs"
      size={1640}
      px={0}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Grid columns={3}>
          <Grid.Col
            sx={{
              backgroundColor: "#fff323",
            }}
            span={1}
          >
            1
          </Grid.Col>
          <Grid.Col
            sx={{
              backgroundColor: "#fff323",
            }}
            span={1}
          >
            2
          </Grid.Col>
          <Grid.Col
            sx={{
              backgroundColor: "#fff323",
            }}
            span={1}
          >
            3
          </Grid.Col>
          <Grid.Col
            sx={{
              backgroundColor: "#fff323",
            }}
            span={1}
          >
            4
          </Grid.Col>
          <Grid.Col
            sx={{
              backgroundColor: "#fff323",
            }}
            span={1}
          >
            5
          </Grid.Col>
          <Grid.Col
            sx={{
              backgroundColor: "#fff323",
            }}
            span={1}
          >
            6
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
