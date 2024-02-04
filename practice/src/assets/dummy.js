const products = [
  {
    id: 0,
    name: "a원룸",
    price: 600,
    reportNum: 0,
    imgSrc: require("./house1.jpg"),
    // require을 사용해야 엑박이 안뜸
    // todo: alias로 경로 수정
  },
  {
    id: 1,
    name: "b원룸",
    price: 500,
    reportNum: 0,
    imgSrc: require("./house2.jpg"),
  },
  {
    id: 2,
    name: "c원룸",
    price: 700,
    reportNum: 0,
    imgSrc: require("./house3.jpg"),
  },
];
export { products };
