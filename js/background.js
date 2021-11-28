const images = ["0.jpeg", "1.jpeg", "2.jpeg","3.jpeg","4.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// background-image: url('img_girl.jpg')
// document.body.backgroundImage = bgImage.src;
// document.body.querySelector(".container").style = `background-image: url(${bgImage.src})`;
document.body.style = `background-image: url(${bgImage.src})`;