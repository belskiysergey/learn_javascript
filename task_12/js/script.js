// Блок отзыва

let block = document.createElement("div");
block.setAttribute("class", "container");
block.style.borderRadius = "5%";
block.style.height = "350px";
block.style.width = "350px";
block.style.border = "1px solid #8080804a";
block.style.margin = "auto";
block.style.boxShadow = "grey 1px 1px 8px";
block.style.display = "flex";
block.style.justifyContent = "space-evenly";
block.style.flexWrap = "wrap";
block.style.flexDirection = "column";
block.style.alignItems = "center";
block.style.padding = "10px";


let root = document.documentElement;
root.appendChild(block);

let image = document.createElement("img");
image.src = "img/phoenix.png";
image.style.width = "85px";
image.style.height = "55px";
block.appendChild(image);

let reviewTitle = document.createElement("h1");
reviewTitle.textContent = "Заголовок отзыва";
block.appendChild(reviewTitle);

let reviewSubtitle = document.createElement("h2");
reviewSubtitle.textContent = "Подзаголовок отзыва";
block.appendChild(reviewSubtitle);

let textReview = document.createElement("p");
textReview.textContent = "Основной текст отзыва";
block.appendChild(textReview);
