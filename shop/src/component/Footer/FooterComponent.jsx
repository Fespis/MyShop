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
        marginTop: 30,
        minHeight: 470,
        fontSize: 14,
        backgroundColor: "#f5f5f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Group
        align="flex-start"
        grow
        sx={{
          width: 1480,
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
              <Text
                component="a"
                href="tel:375-33-000-00-00"
                sx={{ width: 180, fontWeight: 500, fontSize: "1.2rem" }}
              >
                +375(33) 000-00-00
              </Text>
              <Text>справочная служба</Text>
            </Stack>
            <Stack spacing="none">
              <Text
                component="a"
                href="tel:375-33-000-00-00"
                sx={{ width: 180, fontWeight: 500, fontSize: "1.2rem" }}
              >
                +375(33) 000-00-00
              </Text>
              <Text>интернет-магазин</Text>
            </Stack>
          </Stack>
          <Stack>
            <Text sx={{ fontWeight: 700 }}>Оставайтесь на связи</Text>
            <Group>
              <ActionIcon
                component="a"
                href="https://mantine.dev/core/"
                variant="filled"
                color="green"
              >
                <IconBrandInstagram />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://mantine.dev/core/"
                variant="filled"
                color="green"
              >
                <IconBrandTelegram />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://mantine.dev/core/"
                variant="filled"
                color="green"
              >
                <IconBrandFacebook />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://mantine.dev/core/"
                variant="filled"
                color="green"
              >
                <IconBrandVk />
              </ActionIcon>
            </Group>
          </Stack>
        </Stack>
        <Group align="flex-start" position="right" spacing="10%" grow>
          <Stack spacing="xs" justify="flex-start" sx={{ marginTop: 20 }}>
            <Text sx={{ fontWeight: 500 }}>О магазине</Text>
            <Text component="a" href="https://mantine.dev">
              Условия обмена и возврата
            </Text>
            <Text component="a" href="https://mantine.dev">
              Каталог
            </Text>
            <Text component="a" href="https://mantine.dev">
              О компании
            </Text>
            <Text component="a" href="https://mantine.dev">
              Контакты
            </Text>
            <Text component="a" href="https://mantine.dev">
              Доставка
            </Text>
            <Text component="a" href="https://mantine.dev">
              Оплата
            </Text>
          </Stack>
          <Stack spacing="xs" justify="flex-start" sx={{ marginTop: 20 }}>
            <Text sx={{ fontWeight: 500 }}>Клиентам</Text>
            <Text component="a" href="https://mantine.dev">
              Личный кабинет
            </Text>
            <Text component="a" href="https://mantine.dev">
              Блог
            </Text>
            <Text component="a" href="https://mantine.dev">
              Обратная связь
            </Text>
          </Stack>
          <Stack spacing="xs" justify="flex-start" sx={{ marginTop: 20 }}>
            <Text sx={{ fontWeight: 500 }}>Информация</Text>
            <Text component="a" href="https://mantine.dev">
              Пользовательское соглашение
            </Text>
            <Text component="a" href="https://mantine.dev">
              Политика конфиденциальности
            </Text>
          </Stack>
        </Group>
      </Group>
    </Footer>
  );
}

export default FooterComponent;
