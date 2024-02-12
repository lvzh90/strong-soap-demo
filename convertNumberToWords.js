const soap = require('strong-soap').soap;

// URL del WSDL del servicio SOAP de conversión de números a palabras
const url = 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL';

// Opciones adicionales, si son necesarias
const options = {};

soap.createClient(url, options, function(err, client) {
    if (err) {
        console.error('Error al crear el cliente SOAP:', err);
        return;
    }

    // Llamada a la operación 'NumberToWords' del servicio SOAP
    const args = {
        ubiNum: 12345 // Número de ejemplo para convertir a palabras
    };

    client.NumberToWords(args, function(err, result, envelope) {
        // Manejo de errores
        if (err) {
            console.error('Error al llamar la operación del servicio SOAP:', err);
            return;
        }

        // Imprimir el resultado de la operación
        console.log('Resultado de la conversión:', result);
        // Opcional: Imprimir el sobre SOAP de la solicitud
        // console.log('Sobre SOAP:', envelope);
    });
});
