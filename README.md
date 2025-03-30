# API de Artículos

## Índice  
- [API de Artículos](#api-de-artículos)
  - [Índice](#índice)
  - [Descripción](#descripción)
  - [Especificaciones de las consignas](#especificaciones-de-las-consignas)
    - [1. Arquitectura Adecuada](#1-arquitectura-adecuada)
    - [2. Seguridad en las Rutas](#2-seguridad-en-las-rutas)
    - [3. Validación de Datos](#3-validación-de-datos)
    - [4. Código Limpio y Estructurado](#4-código-limpio-y-estructurado)
    - [5. Conexión a la Base de Datos](#5-conexión-a-la-base-de-datos)
    - [6. Documentación del API](#6-documentación-del-api)
    - [7. Repositorio de Código](#7-repositorio-de-código)
  - [Requisitos Previos](#requisitos-previos)
  - [Despliegue](#despliegue)
  - [Instalación y Configuración](#instalación-y-configuración)
  - [Uso de la API](#uso-de-la-api)
    - [Autenticación](#autenticación)
    - [Endpoints](#endpoints)
      - [🔹 Obtener todos los artículos](#-obtener-todos-los-artículos)
      - [🔹 Obtener un artículo por UUID](#-obtener-un-artículo-por-uuid)
      - [🔹 Crear un artículo](#-crear-un-artículo)
      - [🔹 Actualizar un artículo](#-actualizar-un-artículo)
      - [🔹 Eliminar un artículo](#-eliminar-un-artículo)
  - [Manejo de Errores](#manejo-de-errores)
  - [Documentación con Swagger](#documentación-con-swagger)

## Descripción
Esta API permite gestionar artículos, proporcionando operaciones CRUD y validaciones de datos. Implementa autenticación mediante JWT y control de acceso con CORS.

## Especificaciones de las consignas

### 1. Arquitectura Adecuada
La API sigue una arquitectura por capas para garantizar escalabilidad y facilidad de mantenimiento. Se estructuró en los siguientes módulos:
- Rutas
- Controladores
- Servicios
- Middlewares:
  - Autenticación y control de acceso mediante JWT
  - Validación de datos de entrada
  - Manejo centralizado de errores

Esta estructura modular permite una separación clara de responsabilidades y facilita futuras extensiones del sistema.

### 2. Seguridad en las Rutas
Se implementó un sistema de autenticación basado en **JWT**. El proceso de login utiliza credenciales fijas definidas en variables de entorno para simplificar las pruebas. Una vez autenticado, el usuario obtiene un token, que es obligatorio para acceder a endpoints protegidos. La validación del token se realiza mediante un middleware dedicado.

Además, se configuró **CORS** para controlar el acceso a la API. Actualmente, se permite cualquier origen con fines de prueba, pero la configuración es fácilmente ajustable para restringir el acceso a dominios específicos.

### 3. Validación de Datos
La API implementa validaciones en dos niveles:

-**Entradas:** Se utiliza un middleware con *express-validator* para garantizar que los datos recibidos cumplen con los requisitos de formato, tipo y obligatoriedad.

-**Salidas:** Se emplea un DTO (Data Transfer Object) para estructurar las respuestas de manera consistente y uniforme.

Estas validaciones garantizan la coherencia y seguridad de la información procesada.

### 4. Código Limpio y Estructurado
El código sigue buenas prácticas de desarrollo, priorizando la claridad, reutilización y separación de responsabilidades. Se respetan convenciones de nomenclatura y estilos de codificación, asegurando que cada módulo cumpla una función específica dentro de la aplicación.

### 5. Conexión a la Base de Datos
La API se conecta a una base de datos **PostgreSQL** en entorno local. Se implementó un mecanismo de reintentos automáticos para mitigar fallos temporales en la conexión y mejorar la estabilidad del sistema.
Se valida la existencia de la variable de entorno DB_URL para distinguir entre la configuración en local y la configuración para el despliegue.

### 6. Documentación del API
Además de este documento, la API cuenta con una documentación completa en Swagger, que detalla:
- Endpoints disponibles
- Parámetros esperados
- Respuestas posibles con ejemplos de uso

Esto facilita la integración con otros sistemas y su comprensión por parte de los desarrolladores. 

Para más detalles sobre la documentación Swagger ir al final de este documento.

### 7. Repositorio de Código
El código fuente del proyecto está disponible en un repositorio público de GitHub para su evaluación:

https://github.com/JuanNebbia/flexxus-api-test.git

## Requisitos Previos
- Node.js (v18 o superior)
- npm o yarn
- Base de datos PostgreSQL
- Archivo `.env` con las variables de entorno necesarias
 
## Despliegue
Actualmente hay una versión de la API desplegada en Railway. Se puede acceder entrando a https://flexxus-api-test-production.up.railway.app/

Se ha desplegado en la capa gratuita del proveedor, por lo que puede estar caída en caso de transcurrir mucho tiempo.

Así como la API, la base de datos también ha sido desplegada, si se quiere utilizar en local la base de datos remota, se debe introducir la varialbe de entorno:
 ```env
  DB_URL=postgresql://postgres:SqeiFdHlVvutbUDNVFfmgbyxzuVxJKPX@postgres railway.internal:5432/railway
 ```

Se debe obviar esta variable para establecer una conexión con una base de datos local.

## Instalación y Configuración
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/JuanNebbia/flexxus-api-test.git
   cd flexxus-api-test
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Configurar variables de entorno en `.env`:
   ```env
    PORT=3000

    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=postgres
    DB_PASSWORD=postgrespass
    DB_NAME=flexxus
    DB_URL=postgresql://postgres:SqeiFdHlVvutbUDNVFfmgbyxzuVxJKPX@postgres railway.internal:5432/railway (solo usar si se quiere conectar con la db desplegada)

    JWT_SECRET=mysecretkey

    ADMIN_USER=admin
    ADMIN_PASS=Admin123
   ```
4. Ejecutar la aplicación:
   ```sh
   npm start
   npm run dev (modo desarrollo)
   ```

## Uso de la API
### Autenticación
Se incluye un sistema elemental de autenticación para proteger rutas sensibles. Las credenciales del administrador son definidas en variables de entorno.

Antes de acceder a rutas protegidas, obtener un token JWT:

**Local**
```sh
curl -X POST http://localhost:3000/auth/login -d '{"username": "admin", "password": "Admin123"}' -H "Content-Type: application/json"
```
**Despliegue**
```sh
curl -X POST https://flexxus-api-test-production.up.railway.app/auth/login -d '{"username": "admin", "password": "Admin123"}' -H "Content-Type: application/json"
```
El token obtenido se debe pasar en la cabecera de las rutas proegidas.

### Endpoints

#### 🔹 Obtener todos los artículos
```http
GET /articles
```

**Query**
```
  name: Filtra artículos por el nombre (opcional)
  status: Filtra artículos por el estado (opcional)
```

#### 🔹 Obtener un artículo por UUID
```http
GET /articles/{id}
```

#### 🔹 Crear un artículo
```http
POST /articles
```
**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```
**Body:**
```json
{
  "name": "Alfajor", // requerido
  "brand": "Terrabusi", // requerido
  "status": true // opcional
}
```

#### 🔹 Actualizar un artículo
```http
PUT /articles/{id}
```
**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Body:**
```json
{
  "name": "Alfajor", // opcional
  "brand": "Terrabusi", // opcional
  "status": true // opcional
}
```

#### 🔹 Eliminar un artículo
```http
DELETE /articles/{id}
```
**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

## Manejo de Errores
| Código | Descripción |
|--------|------------|
| 400 | Error de validación |
| 401 | No autorizado |
| 403 | Acceso prohibido |
| 404 | No encontrado |
| 500 | Error interno |

## Documentación con Swagger
Para acceder a la documentación interactiva:
- Iniciar la API y abrir en el navegador:
  ```
  http://localhost:3000/api-docs 
  ```
- Ingresar a la API del despliegue:
  ```
  https://flexxus-api-test-production.up.railway.app/api-docs
  ```
