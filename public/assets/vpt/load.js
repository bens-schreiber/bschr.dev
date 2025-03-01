window.onload = function () {
  Module["canvas"] = document.getElementById("canv");

  // Prevent right clicks from opening the context menu
  Module.canvas.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    event.stopPropagation();
  });

  canvas.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
  });
};
