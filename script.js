const colors = ['#ff6f61', '#ff9a9e', '#fad0c4', '#fbc2eb', '#a18cd1'];

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    const color = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.background = color;
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 3 + 2 + 's';

    document.getElementById('balloons').appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 5000);
}
// Tạo hoa và đặt ở dưới
function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    document.getElementById('flowers').appendChild(flower);
}

// Tạo nhiều bông hoa ngay từ đầu
for (let i = 0; i < 10; i++) {
    createFlower();
}

setInterval(createBalloon, 500);

const messageText = `
Mị Mị đáng yêu,

Chúc em sinh nhật vui vẻ nha! Anh biết em là một đứa khá nhạy cảm, hay nghĩ ngợi, nhưng đừng có mà lo quá. Tuổi này của em sẽ là tuổi tuyệt vời nhất đó nhoaa!

Anh luôn xem em như một đứa em gái bé nhỏ của mình. Anh muốn em hiểu rằng: cuộc đời này không phải lúc nào cũng màu hồng đâu, nhưng miễn là em vui, miễn là em cười là được rồi. Đừng để những áp lực cuộc sống làm khó mình nhé!

Năm nay em sẽ còn xinh đẹp hơn, năng động hơn, và quan trọng nhất là được anh chỉ bài còn gì! 🤪

Chúc em sinh nhật vui vẻ, ăn thật nhiều bánh, chụp thật nhiều ảnh, và đừng quên... đừng quên gọi cho anh khi em cần nhé!

Gif from Mỹ Mỹ 🤗
`;

const messageContainer = document.getElementById("message");
const kuromi2 = document.querySelector(".kuromi2");

let i = 0;

// Hàm để hiển thị từng từ một
function typeMessage() {
    if (i < messageText.length) {
        messageContainer.textContent += messageText[i];
        i++;
        setTimeout(typeMessage, 100); // Thay đổi tốc độ đánh chữ ở đây (100ms)
    } else {
        // Hiển thị Kuromi2 sau khi đánh chữ xong
        kuromi2.style.display = 'block'; // Hiển thị hình ảnh
    }
}

// Bắt đầu hiệu ứng khi trang tải xong
window.onload = () => {
    setTimeout(typeMessage, 500); // Chờ một chút trước khi bắt đầu
    const audio = document.getElementById('background-music');

    document.addEventListener('click', () => {
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    });
};



