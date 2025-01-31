// URL base de la API donde se encuentran las rutas para el backend
const API_URL = "http://localhost:8080/api"; // Cambiar según sea necesario si se usa otro puerto

// Función para crear un nuevo contacto con los datos del formulario
// Esta función envía una solicitud POST al backend con los datos de contacto
const createContact = async (formData) => {
    try {
        // Se realiza una solicitud POST a la ruta "/contacto" en el backend, pasando los datos del formulario como cuerpo (body)
        const response = await fetch(`${API_URL}/contacto`, { 
            method: "POST", // Método HTTP: POST (para crear recursos)
            headers: {
                "Content-Type": "application/json", // Se indica que los datos que se envían son en formato JSON
            },
            body: JSON.stringify(formData), // Se convierte el objeto de datos del formulario a una cadena JSON
        });

        // Parseamos la respuesta del servidor como JSON
        const data = await response.json();

        // Si la respuesta no es exitosa (status code no en el rango de 200-299), lanzamos un error
        if (!response.ok) throw new Error(data.message || "Error al crear el contacto");

        // Si todo sale bien, retornamos los datos del nuevo contacto creado
        return data; 

    } catch (error) {
        // Si ocurre algún error, lo capturamos y mostramos en la consola
        console.error("Error al enviar el contacto:", error);
        // Se lanza el error para que sea manejado en el componente que llama a esta función
        throw error; 
    }
};

// Exportamos la función para que pueda ser utilizada en otros archivos
export { createContact };