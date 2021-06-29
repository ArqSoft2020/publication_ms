# Microservicio de Publicaciones (publications_ms)

## Servicios que se proveen

- **perime_publication_ms** es un componente del Backend desarrollado en lenguajes Javascript que corre sobre el entorno de ejecución multiplataforma de Node.js bajo el framework de Express.js.
Este componente realiza las funciones básicas (CRUD) en la capa de persistencia de datos para una publicación el servicio se despliega mediante Docker y se puede acceder por el puerto 3001.

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


## Build Images Only with Dockerfile

Para construir la imagen que controla el microservicio use el siguiente comando:

```
sudo docker build -t macorreag/perime-ms-publication .
```

La imagen de este microservicio es expuesta mediante el puerto 3001 por lo tanto este debe estar abierto para poder acceder al microservicio,para correr este microservicio use:

> Tenga en cuenta que la base de datos de MongoDB debe estar corriendo de manera local en el puerto 27017

```
docker run -p 3001:3001 -d macorreag/perime-ms-publication
```


Las variables de entorno estan establecidas en .env y en el archivo de composicion Dockerfile


puede usar la base de datos local con :
```
 mongodb://mongo:27017
```
donde *mongo* es el nombre del microservicio que corre la app en caso de ser local use 'locahost'

## Falta

Se debe añadir a _secrets_ las variables del archivo _.env_ para eliminar la exposición que se tienen en el repo. Temporalmente se cerro el Cluster.

