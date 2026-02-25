document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    fetch("http://127.0.0.1:5000/test")
        .then(res => res.json())
        .then(data => {
            alert(data.msg);   // should show: backend is working
        })
        .catch(err => {
            alert("Backend not reachable");
            console.log(err);
        });

});