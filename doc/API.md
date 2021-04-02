# API: vista general

![](https://github.com/alexek-r/operacion-fq-ml/blob/main/doc/API2.png)


## Estructura del proyecto: Arquitectura en base a capas

- **doc**: se almacena toda la documentación relacionada a la API.

- **src**: contiene el código en general.

A su vez la carpeta **src** se encuentra dividida en dos partes:

- **libs**: métodos y funciones que no pertenecen a ningún modulo, ejemplo init.js se ejecuta al inicio del programa para crear los satelites y roles correspondientes.

- **controllers**: contiene distintos controladores que reciben las peticiones del webservice y delegan la operacion a su respectivo servicio(provisto por otro archivo, ver carpeta service). Hace de intermediario.

- **middleware**: contiene una serie de middlewares que utiliza nuestro modulo. 

- **models**: donde se almacena los distintos schemas de Mongo de nuestro módulo. 

- **service**: contiene las operaciones necesarias para operar contra la base de datos. Los servicios son llamados desde el controller unicamente si el usuario que desea utilizarlo posee los permisos adecuados.

- **routes**: contiene las rutas o endpoints pertenecientes a cada moudulo.


Tambien contiene como  **seguridad** lo siguiente:

- **Seguridad**: contiene lo relacionado al login de usuarios, roles y token, un sistema de rbac(sistema de control basado en roles y permisos) que permite hacer seguro todos los endpoints del sistema. 




