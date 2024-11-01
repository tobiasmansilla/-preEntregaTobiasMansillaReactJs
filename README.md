# Music Store 🎵

**IMPORTANTE** el hosting local en vercel no me funcionó, intenté en netlify también pero no hubo caso. Está subido en GitHub. link: [https://tobiasmansilla.github.io/preEntregaTobiasMansillaReactJs/](https://tobiasmansilla.github.io/preEntregaTobiasMansillaReactJs/)

**Music Store** es un simulador de e-commerce dedicado a la venta de productos de música, ubicado en Argentina. Este proyecto ofrece una interfaz simple y accesible para que los usuarios naveguen por un catálogo de productos de música, incluyendo álbumes, merchandising y otros artículos relacionados. Al ser un simulador, su propósito es ilustrar el flujo de trabajo de una tienda en línea, desde la navegación de productos hasta la visualización de detalles de cada ítem.

## Objetivo del Proyecto 📌

El objetivo de este proyecto es simular la experiencia de un e-commerce utilizando una interfaz de usuario intuitiva y componentes dinámicos desarrollados con **React.js**. La estructura y funcionalidad del proyecto se enfocan en brindar una visión completa de la navegación en una tienda de música en línea, ideal para aquellos que deseen explorar un e-commerce funcional o aprender más sobre React.

## Tecnologías Utilizadas 🚀

### Desarrollo

- **React.js**: Librería de JavaScript para construir la interfaz de usuario.
- **React Router**: Manejo de rutas dentro de la aplicación para navegación dinámica.
- **CSS**: Estilos personalizados para mejorar la presentación visual de la página.
- **Font Awesome**: Biblioteca de iconos utilizada en componentes como el carrito de compras.

### Infraestructura

- **Node.js**: Entorno de ejecución para JavaScript.
- **Vite**: Herramienta de desarrollo rápida para aplicaciones de JavaScript.
- **GitHub**: Control de versiones y almacenamiento del repositorio del proyecto.

## Configuración del Proyecto ⚙️

Para iniciar el proyecto en tu entorno local:

1. Clona el repositorio desde GitHub:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Ingresa al directorio del proyecto:
   ```bash
   cd directorio_del_proyecto
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta el proyecto en modo de desarrollo:
   ```bash
   npm run dev
   ```

La aplicación estará disponible en `http://localhost:3000`.

## Despliegue y Flujo de Trabajo 📤

El despliegue se gestiona a través de Git y GitHub:

- **Ramas**: El proyecto sigue una estructura de ramas (`main`, `develop`) para gestionar las actualizaciones.
- **Flujo de Trabajo**: Para nuevas funcionalidades o mejoras, se crea una rama a partir de `develop`. Una vez probada y validada, se hace un *merge* en `main`.
- **Actualización Continua**: Las mejoras se integran mediante *pull requests* y revisiones, asegurando un código limpio y funcional.

## Componentes Principales 🛠️

A continuación se describen los principales componentes de la aplicación, ordenados según el flujo de navegación en la página:

1. **NavBar**: Barra de navegación superior que contiene enlaces a las distintas categorías (Música, Álbumes, Merchandising) y el logo de Music Store. También incluye el `CartWidget` con el ícono del carrito.
   
2. **ItemListContainer**: Contenedor que muestra el catálogo de productos. Muestra los productos disponibles para la categoría seleccionada o, en el caso de la página de inicio, todos los productos.

3. **Item**: Componente individual para cada producto en la lista, mostrando su imagen, nombre y un botón de "Ver Detalles" que redirige a la vista de detalles del producto.

4. **ItemDetailContainer**: Vista de detalles de un producto específico, mostrando una descripción ampliada, el precio y un botón de "Comprar".

5. **CartWidget**: Ícono del carrito que muestra la cantidad de productos seleccionados por el usuario.

## Contacto 💬

Para cualquier consulta, puedes contactarme en:

- **Email**: [tobias021506@gmail.com](mailto:tobias021506@gmail.com)
- **GitHub**: [https://github.com/tobiasmansilla](https://github.com/tobiasmansilla)