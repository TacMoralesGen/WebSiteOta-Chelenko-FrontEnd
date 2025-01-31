const API_URL = "http://localhost:";

export const createReserva = async (formData) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Error al enviar la reserva");

        return data;
    } catch (error) {
        console.error("Error al enviar la reserva:", error);
        throw error;
    }
};