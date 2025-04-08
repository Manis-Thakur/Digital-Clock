function digitalclock() {
    const date = new Date();
    let hours = date.getHours();
    const ampm = hours >= 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);
    const fulltime = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = fulltime;
}

digitalclock();
setInterval(digitalclock, 1000);