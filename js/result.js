const result = localStorage.getItem("prediction");

document.getElementById("resultText").innerText =
    "Prediction : " + result;
