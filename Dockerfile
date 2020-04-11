###########################################
#   Dockerfile para configurar MONGO y Nodejs
###########################################

# Establece la imagen base en version 12 de Node
FROM node

# Información de Metadata
# LABEL maintainer="macorreag@unal.edu.co"
# LABEL version="1.0"

#Crear directorio de Trabajo ROOT
WORKDIR /usr/dist

#Copia los archivos package en el directorio Root
COPY package*.json ./

# Instala las dependencias de npm 
RUN npm install

#Copia la App en el directorio Root
COPY . .


#Corre el comando start descrito en package.json para ejecutar la App
# EXPOSE 8080
CMD ["npm", "start"]