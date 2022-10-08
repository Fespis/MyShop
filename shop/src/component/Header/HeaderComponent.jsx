import { Box } from "@mantine/core";
import { AppShell, Navbar, Header, Image, Button, Burger } from "@mantine/core";
import { IconDatabase } from "@tabler/icons";
import { useState } from "react";

function HeaderComponent() {
  const [openedCatalog, setOpenedCatalog] = useState(false);

  return (
    <Header
      height={170}
      p="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Image
        width={200}
        height={70}
        fit="contain"
        src="https://static.insales-cdn.com/files/1/3373/16379181/original/Component_22.png"
        withPlaceholder
      />
      <Button
        size="md"
        variant="gradient"
        onClick={() => setOpenedCatalog((open) => !open)}
        leftIcon={
          <Burger opened={openedCatalog} color="#ffffff" />
        }
        gradient={{ from: "teal", to: "lime", deg: 105 }}
      >
        Каталог
      </Button>
    </Header>
  );
}

export default HeaderComponent;
