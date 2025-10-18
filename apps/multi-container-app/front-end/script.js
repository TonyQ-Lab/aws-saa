document.getElementById("fetchBtn").addEventListener("click", async () => {
    try {
        // Note: use backend service name from docker-compose
        const res = await fetch("http://localhost:8000/api/message");
        const data = await res.json();
        document.getElementById("response").innerText = data.message;
    } catch (err) {
        document.getElementById("response").innerText = "Error: " + err;
    }
});
