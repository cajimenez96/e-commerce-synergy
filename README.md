# MERN Ecommerce

## Descripción

Una tienda de comercio electrónico construida con el stack MERN, que utiliza APIs de terceros. Esta tienda permite tres flujos principales:

1. Los compradores navegan por las categorías, productos y marcas de la tienda.
2. Los vendedores o comerciantes gestionan su propia marca y productos.
3. Los administradores gestionan y controlan todos los componentes de la tienda.

### Características:

  * Node proporciona el entorno backend para esta aplicación.
  * Express se utiliza como middleware para manejar solicitudes y rutas.
  * Mongoose define los esquemas para modelar los datos de la aplicación.
  * React para mostrar los componentes de la interfaz de usuario.
  * Redux para gestionar el estado de la aplicación.
  * Redux Thunk para manejar acciones asíncronas en Redux.

## Demo

Esta aplicación está desplegada en Vercel. Puedes verla aquí :smile: [aquí](https://mern-store-gold.vercel.app).

Ver demo del panel de administración [aquí](https://mernstore-bucket.s3.us-east-2.amazonaws.com/admin.mp4)

## Guía Docker

Para ejecutar este proyecto localmente puedes usar Docker Compose, que ya está configurado en el repositorio. Sigue estos pasos:

1. Clona el repositorio:

```
git clone https://github.com/mohamedsamara/mern-ecommerce.git
cd mern-ecommerce
```

2. (Opcional) Edita el archivo `docker-compose.yml` si necesitas cambiar los valores de `MONGO_URI` o `JWT_SECRET`.

3. Construye e inicia los servicios:

```
docker-compose up --build
```

Esto levantará los servicios de frontend (client), backend (server) y base de datos (mongo).

4. Accede a la aplicación:
   - Frontend: [http://localhost:8080](http://localhost:8080)
   - Backend/API: [http://localhost:3000](http://localhost:3000)

## Seed de Base de Datos

* El comando de seed creará un usuario administrador en la base de datos.
* El email y la contraseña se pasan como argumentos en el comando.
* Ejemplo (reemplaza los corchetes por tus datos):

```
npm run seed:db [email-***@****.com] [password-******]
```

Para más información, revisa el código [aquí](server/utils/seed.js)

## Instalación manual (sin Docker)

Ejecuta `npm install` en la raíz del proyecto para instalar las dependencias tanto en `client` como en `server`. [Ver package.json](package.json)

Comandos básicos de Git:

```
git clone https://github.com/mohamedsamara/mern-ecommerce.git
cd mern-ecommerce
npm install
```

## Variables de entorno (ENV)

Crea un archivo `.env` tanto para el cliente como para el servidor. Ejemplos:

[Ejemplo de ENV para frontend](client/.env.example)

[Ejemplo de ENV para backend](server/.env.example)

## Despliegue en Vercel

Tanto el frontend como el backend pueden desplegarse en Vercel desde el mismo repositorio. Al importar el repositorio en Vercel, especifica el directorio raíz como `client` o `server` según corresponda. Ver [client vercel.json](client/vercel.json) y [server vercel.json](server/vercel.json).

## Desarrollo local

```
npm run dev
```

## Lenguajes y herramientas

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)

### Formateador de código

- Agrega un directorio `.vscode`.
- Crea un archivo `settings.json` dentro de `.vscode`.
- Instala Prettier - Code formatter en VSCode.
- Agrega el siguiente fragmento:

```json
{
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,
  "prettier.arrowParens": "avoid",
  "prettier.jsxSingleQuote": true,
  "prettier.trailingComma": "none",
  "javascript.preferences.quoteStyle": "single"
}
```

