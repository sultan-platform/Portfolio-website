function updateRiyadhTime() {
  const timeElement = document.getElementById("riyadh-time");

  if (timeElement) {
    const now = new Date();

    const riyadhTime = now.toLocaleTimeString("en-US", {
      timeZone: "Asia/Riyadh",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    timeElement.textContent = riyadhTime + " GMT+3";
  }
}

updateRiyadhTime();
setInterval(updateRiyadhTime, 1000);