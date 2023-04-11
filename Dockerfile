# Usa la imagen de Node 14 como base
FROM node:18

# Configura el directorio de trabajo en el contenedor
WORKDIR /src/app

# Copia los archivos de la aplicación en el contenedor
COPY . .

# Instala las dependencias de la aplicación
RUN npm install --force

# Expone el puerto 3000
EXPOSE 3000

# Especifica el comando de inicio de la aplicación
CMD ["npm", "run", "start:prod"]
