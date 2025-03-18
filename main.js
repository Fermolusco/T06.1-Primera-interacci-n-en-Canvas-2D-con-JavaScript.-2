const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let circulos = [
    { x: 222, y: 213, angle: Math.PI / 2 },
    { x: 222, y: 213, angle: 3.15 },
    { x: 555, y: 213, angle: Math.PI },
    { x: 555, y: 213, angle: 4.7 },
    { x: 890, y: 213, angle: Math.PI / 2 },
    { x: 890, y: 213, angle: 3.15 },
    { x: 222, y: 505, angle: 0 },
    { x: 222, y: 505, angle: 4.7 },
    { x: 555, y: 505, angle: 0 },
    { x: 555, y: 505, angle: Math.PI / 2 },
    { x: 890, y: 505, angle: 0 },
    { x: 890, y: 505, angle: 4.7 }
];

function dibujarCirculos() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    circulos.forEach(circulo => {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.ellipse(circulo.x, circulo.y, 130, 130, circulo.angle, 0, Math.PI / 1);
        ctx.fill();
    });
}

dibujarCirculos();

canvas.addEventListener("click", () => {
    circulos.forEach(circulo => {
        circulo.angle += Math.PI / 2; 
    });
    dibujarCirculos();
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    dibujarCirculos();
});
