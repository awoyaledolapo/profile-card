function getCurrentTimeUTC() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    return `The Time is :${hours}:${minutes}:${seconds} `;
  }
const  styled = document.querySelector('[data-testid="currentTimeUTC"]');
     styled .textContent = getCurrentTimeUTC();
     styled.style.color=" rgb(27, 27, 91)";