document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los resultados de los partidos
    const formData = new FormData(this);
    let resultados = {};

    formData.forEach((value, key) => {
        resultados[key] = value;
    });

    // Enviar resultados a un servidor o procesarlos aquí
    console.log(resultados);
});
