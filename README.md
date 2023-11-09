# Buscador de Películas

Este proyecto es un buscador de películas que utiliza la API de The Movie Database (TMDb) para buscar y mostrar información sobre películas.

## Funcionalidades

- Permite a los usuarios buscar películas por título.
- Muestra los resultados de búsqueda, incluyendo el título, fecha de lanzamiento, descripción y una imagen de póster de cada película.
- Almacena las búsquedas anteriores en el almacenamiento local del navegador.

## Tecnologías utilizadas

- HTML: Estructura y contenido de la página.
- CSS: Estilos y diseño de la página.
- JavaScript: Funcionalidad y lógica del buscador de películas.
- [Axios](https://github.com/axios/axios): Librería para realizar solicitudes HTTP a la API de TMDb.
- [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api): API utilizada para obtener datos de películas.

## Instrucciones de uso

1. Ingresa el título de la película que deseas buscar en el campo de entrada.
2. Haz clic en el botón "Buscar".
3. Se mostrarán los resultados de la búsqueda, si los hay.
4. Puedes hacer clic en una película para obtener más detalles.

## Instalación

1. Clona este repositorio o descarga los archivos en tu computadora.
2. Abre el archivo `index.html` en tu navegador web.

## Configuración

Para utilizar la API de TMDb, necesitas obtener una clave de API (API Key) registrándote en su sitio web. Luego, reemplaza la variable `api_key` en el archivo `script.js` con tu clave de API.

```javascript
const api_key = 'tu_clave_de_api_aqui';
