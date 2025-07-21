function updateClock() {
    const now = new Date();
    let H = now.getHours().toString().padStart(2, "0");
    let M = now.getMinutes().toString().padStart(2, "0");
    let S = now.getSeconds().toString().padStart(2, "0");

    const timeString = `${H}:${M}:${S}`;

    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
