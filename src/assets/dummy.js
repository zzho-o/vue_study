const products = [
  {
    id: 0,
    name: "a원룸",
    price: 50,
    reportNum: 0,
    imgSrc: require("./house1.jpg"),
    // require을 사용해야 엑박이 안뜸
    // todo: alias로 경로 수정
  },
  {
    id: 1,
    name: "b원룸",
    price: 60,
    reportNum: 0,
    imgSrc: require("./house2.jpg"),
  },
  {
    id: 2,
    name: "c원룸",
    price: 70,
    reportNum: 0,
    imgSrc: require("./house3.jpg"),
  },
];
export { products };
