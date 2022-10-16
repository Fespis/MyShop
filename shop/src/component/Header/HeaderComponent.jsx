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
} from "@mantine/core";
import { IconSearch, IconUserCircle, IconBasket } from "@tabler/icons";
import { useState } from "react";

function HeaderComponent() {
  const [openedCatalog, setOpenedCatalog] = useState(false);

  return (
    <Header
      p="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: 1480 }}>
        <Group
          spacing="xl"
          sx={{ minWidth: "100%", justifyContent: "space-between" }}
        >
          <Group spacing="xl">
            <Image
              width={100}
              height={70}
              fit="contain"
              src="https://static.insales-cdn.com/files/1/3373/16379181/original/Component_22.png"
              withPlaceholder
            />
            <Badge
              sx={{ width: 160, height: 42, cursor: "pointer" }}
              radius="xs"
              variant="gradient"
              onClick={() => setOpenedCatalog((open) => !open)}
              leftSection={<Burger opened={openedCatalog} color="#ffffff" />}
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
              <Text size="sm">Каталог</Text>
            </Badge>
            <TextInput
              placeholder="Поиск"
              radius="xs"
              size="md"
              sx={{ width: "35vw", maxWidth: 700, height: 42 }}
              rightSection={<IconSearch />}
            />
          </Group>
          <Group spacing="xs">
            <Tooltip label="Профиль">
              <Button
                variant="default"
                color="green"
                sx={{ width: 70, height: 42 }}
              >
                <IconUserCircle />
              </Button>
            </Tooltip>
            <Tooltip label="Корзина">
              <Button
                variant="default"
                color="green"
                sx={{ width: 70, height: 42 }}
              >
                <IconBasket />
              </Button>
            </Tooltip>
          </Group>
        </Group>
      </Box>
    </Header>
  );
}

export default HeaderComponent;
