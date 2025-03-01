var Module = Module || {}; // Preserve the existing Module object

Module.onRuntimeInitialized = function () {
  console.log("Emscripten module initialized");

  var canvasElement = document.getElementById("canvas");
  if (!canvasElement) {
    console.error("Canvas element not found!");
    return;
  }

  Module.canvas = canvasElement;

  Module.canvas.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    event.stopPropagation();
  });

  Module.canvas.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
  });
};
