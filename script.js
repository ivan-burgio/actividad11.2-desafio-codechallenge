document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('registro-form');
    
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        
        const data = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        // Realizar la solicitud POST usando fetch
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            // Puedes realizar aquí cualquier acción con la respuesta del servidor
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
