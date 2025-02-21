# NotasMugiwara - Proyecto de Gestión de Notas

## Descripción
NotasMugiwara es una aplicación web de gestión de notas construida con **React** y **Vite**. Permite a los usuarios agregar, visualizar y organizar notas de manera interactiva. La aplicación está diseñada para ser modular, fácil de usar y extensible. Este proyecto se centra en la utilización de **React**, **Hooks**, y **estilos modernos** para crear una experiencia fluida y atractiva.

## Funcionalidades
- **Agregar notas**: Los usuarios pueden crear notas personalizadas.
- **Visualizar notas**: Las notas existentes se muestran en un contenedor interactivo.
- **Seleccionar temas de color**: Los usuarios pueden elegir diferentes colores para las notas a través de un selector de colores en la barra lateral.
- **Interfaz responsiva**: La interfaz de usuario se adapta a diferentes tamaños de pantalla, proporcionando una experiencia optimizada en dispositivos móviles y escritorios.
- **Gestión de estado**: Se utilizan **React hooks** (`useState`, `useEffect`) para gestionar el estado de las notas y la aplicación.

## Requisitos Técnicos
- **Frontend**:
  - React
  - Vite
  - React Router (futuro, si se agrega navegación entre páginas)
  - Hooks (`useState`, `useEffect`)
  - Tailwind CSS o CSS Modules para los estilos
- **Backend (Opcional)**:
  - Django con Django REST Framework (para una posible futura integración con una API REST)
- **Persistencia de Datos (Por implementar)**:
  - `localStorage` o integración futura con una API REST en Django para la persistencia de las notas.

## Instalación
Sigue estos pasos para clonar e instalar el proyecto:

**Clona el repositorio**:
git clone https://github.com/DevAlvaroHA/ProyectoCliente

Navega a la carpeta del proyecto:
cd NotasMugiwara

Instala las dependencias:
npm install

Inicia el servidor de desarrollo:
npm run dev
Esto abrirá la aplicación en tu navegador en http://localhost5173

## Dockerización
Este proyecto está contenerizado usando Docker. Puedes ejecutar la aplicación en un contenedor Docker para asegurarte de que se ejecute correctamente en cualquier entorno.

Pasos para ejecutar con Docker
Construir la imagen Docker:

Ejecuta el siguiente comando en la raíz del proyecto para construir la imagen Docker:
docker build -t mi-react-app .

Una vez que la imagen esté construida, puedes ejecutar el contenedor con:
docker run -p 8080:5173 mi-react-app

Esto mapea el puerto 5173 dentro del contenedor al puerto 8080 en tu máquina local. Luego, podrás acceder a la aplicación en:
http://localhost:8080

## Usando Docker Compose
Para facilitar la ejecución del contenedor y la integración con otros servicios, también puedes usar Docker Compose.

Ejecutar con Docker Compose:
docker-compose up --build
Este comando levantará el contenedor y expondrá la aplicación en http://localhost:8080.

## Futuro y Mejoras
Algunas mejoras que podrían implementarse en el futuro incluyen:

Autenticación de usuarios: Integración con Firebase o Django REST Framework para permitir que los usuarios creen cuentas y gestionen sus notas de manera segura.
Persistencia de datos: Guardar las notas en el almacenamiento local (localStorage) o integrarlas con una base de datos en el backend usando una API REST.
Navegación con React Router: Agregar rutas para permitir la navegación entre diferentes vistas de la aplicación.

## Contribución
Si deseas contribuir al proyecto, puedes hacer un fork del repositorio y enviar un pull request con tus cambios. Asegúrate de seguir las mejores prácticas de codificación y dejar comentarios claros sobre tus cambios.

## Licencia
Este proyecto está licenciado bajo la MIT License. Consulta el archivo LICENSE para más detalles.
