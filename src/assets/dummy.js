const products = [
  {
    name: "a원룸",
    price: "50만원",
    reportNum: 0,
    imgSrc: require("./house1.jpg"),
    // require을 사용해야 엑박이 안뜸
    // todo: alias로 경로 수정
  },
  {
    name: "b원룸",
    price: "60만원",
    reportNum: 0,
    imgSrc: require("./house2.jpg"),
  },
  {
    name: "c원룸",
    price: "70만원",
    reportNum: 0,
    imgSrc: require("./house3.jpg"),
  },
];
export { products };
