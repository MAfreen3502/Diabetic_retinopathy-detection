const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];
    if(file){
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});

window.uploadImage = function() {
    const file = imageInput.files[0];

    if(!file){
        alert("Please select an image");
        return;
    }

    document.getElementById("loading").innerText = "Predicting...";

    // TEMPORARY: Fake prediction for GitHub Pages
    setTimeout(() => {
        document.getElementById("loading").innerText = "";
        preview.style.display = "none";

        // Store fake prediction in localStorage and redirect to result page
        localStorage.setItem("prediction", "No DR detected");
        window.location.href = "result.html";
    }, 1000); // simulate 1-second processing delay
}