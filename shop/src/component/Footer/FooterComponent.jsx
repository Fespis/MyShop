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
  Footer,
  Stack,
  Title,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandTelegram,
  IconBrandVk,
  IconBrandInstagram,
} from "@tabler/icons";
import { useState } from "react";

function FooterComponent() {
  return (
    <Footer
      sx={{
        height: 470,
        backgroundColor: "#f5f5f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Group
        align="flex-start"
        sx={{
          width: 1620,
        }}
      >
        <Stack justify="flex-start" spacing="xl">
          <Image
            width={180}
            height={110}
            fit="contain"
            src="https://static.insales-cdn.com/files/1/3373/16379181/original/Component_22.png"
            withPlaceholder
          />
          <Stack>
            <Stack spacing="none">
              <Text sx={{ width: 180, fontWeight: 500, fontSize: "1.2rem" }}>
                +375(33) 000-00-00
              </Text>
              <Text sx={{ fontSize: 14 }}>справочная служба</Text>
            </Stack>
            <Stack spacing="none">
              <Text sx={{ width: 180, fontWeight: 500, fontSize: "1.2rem" }}>
                +375(33) 000-00-00
              </Text>
              <Text sx={{ fontSize: 14 }}>справочная служба</Text>
            </Stack>
          </Stack>
          <Stack>
            <Text sx={{ fontWeight: 700, fontSize: 14 }}>
              Оставайтесь на связи
            </Text>
            <Group>
              <ActionIcon variant="filled" color="green">
                <IconBrandInstagram />
              </ActionIcon>
              <ActionIcon variant="filled" color="green">
                <IconBrandTelegram />
              </ActionIcon>
              <ActionIcon variant="filled" color="green">
                <IconBrandFacebook />
              </ActionIcon>
              <ActionIcon variant="filled" color="green">
                <IconBrandVk />
              </ActionIcon>
            </Group>
          </Stack>
        </Stack>
        <Group>asd</Group>
      </Group>
    </Footer>
  );
}

export default FooterComponent;
