# Usa una imagen base con Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración del proyecto
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código al contenedor
COPY . ./

# Exponer el puerto en el que corre Vite
EXPOSE 5173

# Comando para iniciar la aplicación React
CMD ["npm", "run", "dev"]

