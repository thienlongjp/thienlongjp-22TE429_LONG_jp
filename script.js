document.addEventListener("DOMContentLoaded", function () {
  const snowflakesContainer = document.querySelector(".snowflakes");

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❅";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.opacity = Math.random();
    snowflakesContainer.appendChild(snowflake);
  }
});
function closeNotification() {
  var notification = document.getElementById("notification");
  notification.style.display = "none";
  var content = document.getElementById("content");
  content.classList.add("visible");
}
