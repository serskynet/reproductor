document.addEventListener("DOMContentLoaded", function () {
    const videoUpload = document.getElementById("video-upload");
    const videoList = document.getElementById("video-list");
    const videoElement = document.getElementById("video");

    // Función para agregar un video a la lista
    function addVideoToList(file) {
        const videoTitle = document.createElement("h2");
        videoTitle.textContent = file.name;
        videoList.appendChild(videoTitle);
    }

    // Función para cargar y reproducir el video seleccionado
    function loadAndPlayVideo(file) {
        const sourceElement = document.createElement("source");
        sourceElement.src = URL.createObjectURL(file);
        videoElement.innerHTML = ""; // Limpiar video actual
        videoElement.appendChild(sourceElement);
        videoElement.load(); // Cargar el nuevo video
        videoElement.play(); // Reproducir el nuevo video
    }

    // Evento de cambio al seleccionar un nuevo video
    videoUpload.addEventListener("change", function () {
        const files = videoUpload.files;
        videoList.innerHTML = ""; // Limpiar lista de videos

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (file.type.startsWith("video/")) {
                addVideoToList(file);
            }
        }

        if (files.length > 0) {
            loadAndPlayVideo(files[0]); // Cargar y reproducir el primer video de la lista
        }
    });

    // Evento para pausar o reanudar la reproducción al hacer clic en el video
    videoElement.addEventListener("click", function () {
        if (videoElement.paused) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    });
});

