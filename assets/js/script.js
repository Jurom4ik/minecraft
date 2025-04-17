
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const serverTimeElement = document.getElementById('server-time');
    setInterval(function() {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        serverTimeElement.textContent = `Текущее время: ${hours}:${minutes}:${seconds}`;
    }, 1000);
});
