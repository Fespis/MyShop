import { Container, Stack } from "@mantine/core";
import CarouselGoods from "../Carousel/CarouselGoods";
import CarouselBanners from "../Carousel/CarouselBanners";
import CarouselShowcases from "../Carousel/CarouselShowcases";
import MainCarousel from "../Carousel/MainCarousel";
import goodsData from "../../data/goodsData";
import getDataArray from "../../functions/getDataArray";

function Home() {
  return (
    <Container my="md" sx={{ maxWidth: 1480 }}>
      <Stack spacing="xl">
        <MainCarousel></MainCarousel>
        <CarouselGoods
          goodsData={getDataArray("Смартфоны", 8, goodsData)}
        ></CarouselGoods>
        <CarouselGoods
          goodsData={getDataArray("Ноутбуки", 8, goodsData)}
        ></CarouselGoods>
        <CarouselBanners></CarouselBanners>
        <CarouselGoods
          goodsData={getDataArray("Видеокамеры", 8, goodsData)}
        ></CarouselGoods>
        <CarouselGoods
          goodsData={getDataArray("Телевизоры", 8, goodsData)}
        ></CarouselGoods>
        <CarouselBanners></CarouselBanners>
        <CarouselShowcases
          goodsData={[
            getDataArray("Смартфоны", 3, goodsData),
            getDataArray("Ноутбуки", 3, goodsData),
            getDataArray("Видеокамеры", 3, goodsData),
            getDataArray("Телевизоры", 3, goodsData),
          ]}
        ></CarouselShowcases>
      </Stack>
    </Container>
  );
}

export default Home;
