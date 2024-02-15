$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const heart = document.querySelector(".heart");
  const message = document.getElementById("message");
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();

  function checkIfOutOfViewport() {
    const heartRect = heart.getBoundingClientRect();
    if (
      heartRect.right < containerRect.left ||
      heartRect.left > containerRect.right ||
      heartRect.bottom < containerRect.top ||
      heartRect.top > containerRect.bottom
    ) {
      message.textContent = "¡Eres una crack!";
    }
  }

  setInterval(checkIfOutOfViewport, 100);
});
