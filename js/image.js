const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];
   preview.src = URL.createObjectURL(file);
   preview.style.display = "block";
});
function uploadImage(){

    const file = imageInput.files[0];

    if(!file){
        alert("Please select an image");
        return;
    }

    document.getElementById("loading").innerText = "Predicting...";

    const formData = new FormData();
    formData.append("image", file);

    fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {

        localStorage.setItem("prediction", data.result);
        window.location.href = "result.html";

    })
    .catch(error => {
        alert("Error in prediction");
        console.log(error);
    });
}
