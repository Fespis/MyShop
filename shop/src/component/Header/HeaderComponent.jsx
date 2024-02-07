import {
  Header,
  Autocomplete,
  Group,
  Burger,
  Image,
  Badge,
  Container,
  Divider,
  Button,
  Text,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import HeaderMobileMenu from "./HeaderMobileMenu";
import headerButtonLinks from "../../data/headerButtonLinks";
import headerCategory from "../../data/headerCategoryLinks";
import { headerStyles } from "../../classes/HeaderStyles";

export function HeaderSearch() {
  const { classes } = headerStyles();
  const [openedMobileMenu, setOpenedMobileMenu] = useState(false);
  const [heightHeader, setHeightHeader] = useState(0);

  const refHeader = useRef();

  useEffect(() => {
    setHeightHeader(getHeightElement(refHeader));
  }, []);

  function getHeightElement(ref) {
    return ref.current.clientHeight;
  }

  const items = headerButtonLinks.map((linkItem) => (
    <Button
      key={linkItem.label}
      variant='gradient'
      gradient={{ from: "teal", to: "lime", deg: 105 }}
    >
      {linkItem.icon}
      <Link to={linkItem.link} className={classes.link}>
        {linkItem.label}
      </Link>
    </Button>
  ));

  return (
    <>
      <Container className={classes.headerMargin} sx={{ height: heightHeader }}></Container>
      <Header ref={refHeader} className={`${classes.header} ${classes.headerMargin}`}>
        <Group position='apart' className={classes.paddingLeftRight}>
          <Group>
            {/* <Burger opened={opened} onClick={toggle} size="sm" /> */}
            <Link to='/'>
              <Image
                width={100}
                height={70}
                fit='contain'
                src='https://static.insales-cdn.com/files/1/3373/16379181/original/Component_22.png'
                withPlaceholder
              />
            </Link>
            <Autocomplete
              className={classes.search}
              placeholder='Поиск'
              icon={<IconSearch size={16} stroke={1.5} />}
              data={["Смартфоны", "Телевизоры", "Видеокамеры", "Ноутбуки"]}
            />
          </Group>

          <Group>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            <HeaderMobileMenu
              openedMobileMenu={openedMobileMenu}
              setOpenedMobileMenu={setOpenedMobileMenu}
            ></HeaderMobileMenu>
            <Badge
              radius='xs'
              variant='gradient'
              onClick={() => setOpenedMobileMenu((open) => !open)}
              leftSection={<Burger opened={openedMobileMenu} color='#ffffff' sx={{ margin: 0 }} />}
              gradient={{ from: "teal", to: "lime", deg: 105 }}
              className={classes.burgerMobile}
            ></Badge>
          </Group>
        </Group>
        <Divider size='xs' className={classes.borderColor} />
        <Container className={classes.bottomLink} sx={{ overflowX: "auto" }}>
          <Group position='apart' className={classes.bottomLinkList}>
            {headerCategory.map((item) => {
              return (
                <Link
                  to='/develop'
                  className={`${!item.icon && classes.linkDisable} ${
                    item.icon && classes.linkDisableMain
                  }`}
                  key={item.category}
                >
                  {item.icon}
                  <Text>{item.category}</Text>
                </Link>
              );
            })}
          </Group>
        </Container>
      </Header>
    </>
  );
}

export default HeaderSearch;
