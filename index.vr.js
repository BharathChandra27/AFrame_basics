var scene = document.querySelector("a-scene");
var cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#111");
cylinder.setAttribute("height", "1.5");
cylinder.setAttribute("radius", "0.5");
cylinder.setAttribute("rotation", "-90 0 0");
cylinder.setAttribute("position", "-3 1 -3");
scene.appendChild(cylinder);
