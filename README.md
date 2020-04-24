# Microservicio de Publicaciones (publications_ms)

Publication_ms es un microservicio del Backend desarrollado en lenguajes Javascript que corre sobre el entorno de ejecución multiplataforma de Node.js bajo el framework de Express.js.
Este componente realiza las funciones básicas (CRUD) en la capa de persistencia de datos para una publicación el servicio se despliega mediante Docker y se puede acceder por el puerto 3000:

## Manejo del servicio

Cree la imagen de Docker
```
sudo docker-compose build
```

Lance la imagen de Docker
```
sudo docker-compose up
```



## Descripción de elementos de la vista

**Publication**: Es el elemento ( _documento en MongoDB_ ) que almacenara las cualidades de un producto  que el usuario desea vender ó intercambiar mediante nuestra plataforma.
