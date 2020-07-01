###########################################
#   Dockerfile para configurar MONGO y Nodejs
###########################################

# Establece la imagen base en version 12 de Node
FROM node

# Información de Metadata
LABEL maintainer="macorreag@unal.edu.co"
LABEL version="1.0"

#Variables de Entorno establecidas
ENV PORT 3001
ENV MONGO_URL mongodb+srv://macorreag:helloworld@cluster0-aodgz.mongodb.net/test?retryWrites=true&w=majority

#Crear directorio de Trabajo ROOT
WORKDIR /publications

#Copia los archivos package en el directorio Root
COPY package*.json ./

# Instala las dependencias de npm 
RUN npm install

#Copia la App en el directorio Root
COPY . .

#Se expone la App en el puerto establecido anteriormente
EXPOSE $PORT

RUN npm run build

#Corre el comando start descrito en package.json para ejecutar la App
CMD ["npm", "start"]