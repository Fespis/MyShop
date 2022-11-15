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
  ActionIcon,
} from "@mantine/core";

import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons";
import CarouselGoods from "../Carousel/CarouselGoods";
import CarouselBanners from "../Carousel/CarouselBanners";

function Home() {
  return (
    <Container my="md" sx={{ maxWidth: 1480 }}>
      <Stack spacing="xl">
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
            sx={{ cursor: "pointer" }}
            radius="md"
            src="https://static.insales-cdn.com/r/XwKQypt2ac0/rs:fill-down:547:342:1/q:100/plain/files/1/5894/16365318/original/Component_5-5-min.jpg"
            alt="Random unsplash image"
          />

          <Image
            sx={{ cursor: "pointer" }}
            radius="md"
            src="https://static.insales-cdn.com/r/H7o2a6XDSMA/rs:fill-down:260:163:1/q:100/plain/files/1/5322/16364746/original/Component_5-3_143e82bedd6e26ac5f9ec8ec65aeb4cd.jpg"
            alt="Random unsplash image"
          />

          <Image
            sx={{ cursor: "pointer" }}
            radius="md"
            src="https://static.insales-cdn.com/r/ObtSC0YvoZA/rs:fill-down:260:163:1/q:100/plain/files/1/5985/17307489/original/Component_5-4-min_4646b7946c16baf088d50f67227c015b.jpg"
            alt="Random unsplash image"
          />

          <Image
            sx={{ cursor: "pointer" }}
            radius="md"
            src="https://static.insales-cdn.com/r/nHITxemcuwY/rs:fill-down:260:163:1/q:100/plain/files/1/5982/17307486/original/2.jpg"
            alt="Random unsplash image"
          />
        </SimpleGrid>
        <CarouselGoods></CarouselGoods>
        <CarouselBanners></CarouselBanners>
      </Stack>
    </Container>
  );
}

export default Home;
