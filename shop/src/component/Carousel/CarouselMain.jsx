// import { Carousel } from "@mantine/carousel";
// import { useMediaQuery } from "@mantine/hooks";
// import {
//   createStyles,
//   Text,
//   useMantineTheme,
//   Image,
//   Group,
//   Stack,
//   Paper,
// } from "@mantine/core";
// import { IconShoppingCart } from "@tabler/icons";

// const useStyles = createStyles((theme) => ({
//   card: {
//     height: 250,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },

//   title: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontWeight: 400,
//     color: theme.black,
//     lineHeight: 1.2,
//     fontSize: 16,
//     marginTop: theme.spacing.xs,
//   },

//   price: {
//     color: theme.black,
//     opacity: 0.7,
//     fontWeight: 700,
//     fontSize: 24,
//     textTransform: "uppercase",
//   },

//   description: {
//     width: "100%",
//   },
// }));

// function Showcases({ image, title }) {
//   const { classes } = useStyles();
//   const theme = useMantineTheme();

//   return (
//     <Paper shadow="md" p="xl" radius="xs" className={classes.card}>
//       <Group position="apart" className={classes.description}>
//         <Image
//           width={100}
//           height={100}
//           fit="contain"
//           radius="md"
//           src={image}
//           alt="Random image"
//         />
//         <Text order={3} className={classes.title}>
//           {title}
//         </Text>
//       </Group>
//     </Paper>
//   );
// }

// const data = {
//   firstCategory: [
//     {
//       id: 1,
//       image:
//         "https://static.insales-cdn.com/r/893xLRXMbrU/rs:fit:140:0:1/plain/images/products/1/3803/414199515/compact_sm_215_galaxya21s_black_front_raw.jpg@webp",
//       title: "Смартфон Samsung Galaxy 5 Pro",
//       category: "Смартфон",
//       price: "899",
//     },
//     {
//       id: 2,
//       image:
//         "https://static.insales-cdn.com/r/893xLRXMbrU/rs:fit:140:0:1/plain/images/products/1/3803/414199515/compact_sm_215_galaxya21s_black_front_raw.jpg@webp",
//       title: "Смартфон Xiaomi Madein India",
//       category: "Смартфон",
//       price: "899",
//     },
//     {
//       id: 3,
//       image:
//         "https://static.insales-cdn.com/r/893xLRXMbrU/rs:fit:140:0:1/plain/images/products/1/3803/414199515/compact_sm_215_galaxya21s_black_front_raw.jpg@webp",
//       title: "Смартфон Samsung Galaxy MUI8",
//       category: "Смартфон",
//       price: "899",
//     },
//   ],
//   secondCategory: [
//     {
//       id: 1,
//       image:
//         "https://static.insales-cdn.com/r/-5WEpnQJI3w/rs:fit:140:0:1/plain/images/products/1/1412/493127044/compact_1.webp",
//       title: "Ноутбуки ASUS Giotaro",
//       category: "Ноутбуки",
//       price: "1500",
//     },
//     {
//       id: 2,
//       image:
//         "https://static.insales-cdn.com/r/-5WEpnQJI3w/rs:fit:140:0:1/plain/images/products/1/1412/493127044/compact_1.webp",
//       title: "Ноутбуки ASUS Dio",
//       category: "Ноутбуки",
//       price: "1500",
//     },
//     {
//       id: 3,
//       image:
//         "https://static.insales-cdn.com/r/-5WEpnQJI3w/rs:fit:140:0:1/plain/images/products/1/1412/493127044/compact_1.webp",
//       title: "Ноутбуки ASUS Rog Strix",
//       category: "Ноутбуки",
//       price: "1500",
//     },
//   ],
//   thirdCategory: [
//     {
//       id: 1,
//       image:
//         "https://static.insales-cdn.com/r/yagq3Rups_E/rs:fit:240:240:1/plain/images/collections/1/293/81690917/medium_05.jpg@webp",
//       title: "Телевизор Zekka Adia",
//       category: "Телевизор",
//       price: "720",
//     },
//     {
//       id: 2,
//       image:
//         "https://static.insales-cdn.com/r/yagq3Rups_E/rs:fit:240:240:1/plain/images/collections/1/293/81690917/medium_05.jpg@webp",
//       title: "Телевизор Porshe Caien",
//       category: "Телевизор",
//       price: "1860",
//     },
//     {
//       id: 3,
//       image:
//         "https://static.insales-cdn.com/r/yagq3Rups_E/rs:fit:240:240:1/plain/images/collections/1/293/81690917/medium_05.jpg@webp",
//       title: "Телевизор Samsung Zero",
//       category: "Телевизор",
//       price: "1250",
//     },
//   ],
// };

// export function CarouselShowcases() {
//   const theme = useMantineTheme();
//   const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
//   const slides = data.map((item) => (
//     <Carousel.Slide key={item.id}>
//       <Text variant="outline" sx={{ fontWeight: 500, fontSize: "1.5rem" }}>
//         {item.category}
//       </Text>
//       <Stack>
//         <Showcases {...item} />
//         <Showcases {...item} />
//         <Showcases {...item} />
//       </Stack>
//     </Carousel.Slide>
//   ));

//   return (
//     <>
//       <Carousel
//         slideSize="25%"
//         slidesToScroll={mobile ? 1 : 0}
//         slideGap="xs"
//         withControls={mobile ? true : false}
//         draggable={mobile ? true : false}
//         breakpoints={[
//           {
//             maxWidth: "xs",
//             slideSize: "100%",
//             slidesToScroll: 1,
//             draggable: true,
//           },
//           {
//             maxWidth: "md",
//             slideSize: "50%",
//             slidesToScroll: 1,
//             draggable: true,
//           },
//           {
//             maxWidth: "lg",
//             slideSize: "33.33333%%",
//             slidesToScroll: 1,
//           },
//           {
//             maxWidth: "xl",
//             slideSize: "33.33333%",
//             slidesToScroll: 1,
//           },
//         ]}
//         align="start"
//         loop
//       >
//         {slides}
//       </Carousel>
//     </>
//   );
// }

// export default CarouselShowcases;