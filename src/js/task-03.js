const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulList = document.querySelector(".gallery");
const newImages = images
  .map((image) => `<li><img class="picture" src=${image.url} width = '350' alt='${image.alt}'></img></li>`)
  .join("");

// const newImages = images
//   .map(({ url, alt }) => `<li class="gallery-item"><img src=${url} alt=${alt} width = '350'</li>`)
//   .join("");

ulList.insertAdjacentHTML("beforeend", newImages);

ulList.style.display = "flex";
ulList.style.flexWrap = "wrap";
ulList.style.listStyle = "none";
ulList.style.gap = "20px";
ulList.style.justifyContent = "center";
ulList.style.alignItems = "center";
