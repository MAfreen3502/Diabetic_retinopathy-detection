document.getElementById("imageInput").addEventListener("change", function(e){
    const file = e.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(event){
            const img = document.getElementById("preview");
            img.src = event.target.result;
            img.style.display = "block";
        }
        reader.readAsDataURL(file);
    }
});

document.querySelector("button").addEventListener("click", function(e){
    e.preventDefault();

    const imageInput = document.getElementById("imageInput").files[0];
    if(!imageInput){
        alert("Please upload an image first!");
        return;
    }

    const formData = new FormData();
    formData.append("image", imageInput);

    document.getElementById("loading").innerText = "Predicting...";

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("loading").innerText = "";
        document.getElementById("preview").style.display = "none";
        alert("Prediction: " + data.result);
    })
    .catch(err => {
        document.getElementById("loading").innerText = "";
        console.log(err);
        alert("Backend not reachable or error occurred");
    });
});