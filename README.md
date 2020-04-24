# Microservicio de Publicaciones (publications_ms)

## Servicios que se proveen

- **perime_publication_ms** es un componente del Backend desarrollado en lenguajes Javascript que corre sobre el entorno de ejecución multiplataforma de Node.js bajo el framework de Express.js.
Este componente realiza las funciones básicas (CRUD) en la capa de persistencia de datos para una publicación el servicio se despliega mediante Docker y se puede acceder por el puerto 3000.

- **perime_publication_db** es un componente del Backed que maneja la persistencia de los datos referentes a una publicacion que realicen los usuarios de manerra documental mediante la base de datos MongoDB por lo tanto es de tipo NoSQL y se puede acceder a ella mediante el puerto 27017.


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
