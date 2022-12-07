import shuffleArray from "./shuffleArray";

function getDataArray(category, length, goodsData) {
  if (category !== "" && length !== 0 && goodsData !== 0)
    return {
      category: category,
      goods: shuffleArray(
        goodsData.find((goodCategory) => goodCategory.category === category)
          .goods
      ).slice(0, length),
    };
}

export default getDataArray;
