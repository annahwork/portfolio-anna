
const canvas = document.getElementById('sakura');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';

let petals = [];
const petalCount = 20;

for (let i = 0; i < petalCount; i++) {
    petals.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 10 + 8,
    speedY: Math.random() * 2 + 1,
    speedX: Math.random() * 1 - 0.5,
    rotation: Math.random() * 20,
    rotationSpeed: Math.random() * 3 - 1.5
    });
}

function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation * Math.PI / 180);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size / 2, p.size / 2, 0, p.size);
    ctx.bezierCurveTo(p.size / 2, p.size / 2, p.size / 2, -p.size / 2, 0, 0);
    ctx.fillStyle = 'rgba(255,182,193,0.8)';
    ctx.fill();
    ctx.restore();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => {
    p.y += p.speedY;
    p.x += p.speedX;
    p.rotation += p.rotationSpeed;

    if (p.y > canvas.height + 10) {
    p.y = -10;
    p.x = Math.random() * canvas.width;
    }

    drawPetal(p);
    });
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
canvas.style.zIndex = '9999';
canvas.style.pointerEvents = 'none';