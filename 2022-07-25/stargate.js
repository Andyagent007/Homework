window.c = document.getElementById("myCanvas");
window.x = c.getContext("2d");
window.S = 0;
window.C = Math.cos;
window.T = 0;

const start = Date.now();
setInterval(function () {
const elapsedMs = Date.now() - start;
u(elapsedMs / 1000);
}, 1000 / 60);

function u(t) {
z = (n) =>
    n-- && Math.cos(T / 2 + (S * T) / R + t * 9) * Math.cos(T / 4 - z(n) * 2) - r / 6;
for (c.width = 192, R = 48, i = 8064; i--; )
    x.fillRect(
    S + 96,
    T + 54,
    (Math.cos(
        Math.atan2(
        (S = (i % 97) - R),
        (T = i / 97 - R),
        (r = (S * S + T * T) ** 0.5)
        ) * 9
    ) *
        20 -
        r) &
        44 && r > 36
        ? r < 42
        ? T / R
        : S / R
        : 1,
    r > 36 ? r < R : z(3) / 5
    );
}