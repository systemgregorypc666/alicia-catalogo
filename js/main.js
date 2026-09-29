// --- Configuración de System Gregory PC ---

// 1. Función para reproducir el sonido de la página
function sonarPagina() {
    const sonido = document.getElementById('sonido-pagina');
    if (sonido) {
        sonido.currentTime = 0; // Reinicia el audio si se vuelve a clickear rápido
        sonido.play();
    }
}

// 2. Función para enviar el pedido por WhatsApp (Precios COP)
function enviarWhatsApp(nombreProducto, precio) {
    // Número de la cliente en Bucaramanga (Cámbialo por el real)
    const telefono = "580400000000"; 
    
    // Mensaje automático personalizado
    const mensaje = encodeURIComponent(
        `Hola Alicia! 👋 Vi tu catálogo web.\n\n` +
        `Me interesa este producto:\n` +
        `📌 *${nombreProducto}*\n` +
        `💰 Precio: *${precio}*\n\n` +
        `¿Está disponible? Quedo atento/a para el pago por Pagpmovil/Daviplata. 🇨🇴`
    );

    // URL de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
    
    // Abre WhatsApp en una pestaña nueva
    window.open(url, '_blank');
}

// 3. Ejemplo de cómo cargarías los productos desde el JSON (Opcional)
// Cada vez que el usuario haga clic en un botón de "Comprar" en tu HTML:
// <button onclick="sonarPagina(); enviarWhatsApp('Conjunto Deportivo Pro', '85.000 COP')">Comprar</button>
