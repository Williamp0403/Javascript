// API: Aplication Programming Interface
// TCP y IP

// Protocolos de la web
// HTTP: Hypertext Transfer Protocol
// URL: Uniform Resource Locator
// HTML: Hypertext Markup Language

// API REST: permite la comunicacion entre sistemas a traves de HTTP

// JSON: JavaScript Object Notation

// Metodos HTTP
// GET: obtener informacion
// POST: enviar informacion
// PUT: actualizar informacion
// DELETE: eliminar informacion

// HTTPS: Hypertext Transfer Protocol Secure
// SSL: Secure Sockets Layer

// Status Code

// 200 OK
// 201 Created

// 300 Redirection

// Los codigos de estado 400 son errores del cliente
// 400 Client Error
// 401 Unauthorized
// 402 Bad Request
// 403 Forbidden
// 404 Not Found
// 422 Unprocessable Entity

// Los codigos de estado 500 son errores del servidor
// 500 Server Error
// 502 Bad Gateway

// Consultando API

// Endpoint: URL de la API a consultar
// Query String: parametros que se envian a la API
// Headers: informacion adicional que se envia a la API

// Cliente HTTP

// Postman
// Insomnia
// Thunder Client

// Metodo Fetch

// fetch('https://jsonplaceholder.typicode.com/posts')

url_api_chuck_norris = "https://api.chucknorris.io/jokes/random";

fetch(url_api_chuck_norris)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// Async Await
// Callbacks y Promesas