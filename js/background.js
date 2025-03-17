const images=[

    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"


];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// body의 background-image로 설정
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = "cover"; // 화면 크기에 맞춤
document.body.style.backgroundPosition = "center"; // 중앙 정렬
document.body.style.backgroundRepeat = "no-repeat"; // 반복 방지