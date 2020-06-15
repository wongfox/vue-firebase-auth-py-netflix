# proyecto netflix

## Project setup
```
yarn install
```

vue create mi-netflix (seleccionar instalación manula y elegir las opciones vuex, router, babel)
cd mi-netflix
npm i firebase
npm install --save axios vue-axios
npm install vue bootstrap-vue bootstrap / yarn add vue bootstrap-vue bootstrap

### Para iniciar el proyecto
```
npm run serve / yarn serve
```

### Compiles and minifies for production
```
npm run build / yarn build
```

### Customize configuration
Para ver la explicación paso a paso ir al siguiente link https://www.notion.so/Vue-JS-05790d1629544674b45ed68f90f237db

### Instalaciones y Contenido del proyecto
- [ ]  Instalar Node JS ([https://nodejs.org/es/](https://nodejs.org/es/))
- [ ]  Instalar VUE CLI de forma global ([https://cli.vuejs.org/guide/installation.html](https://cli.vuejs.org/guide/installation.html))

- Crear proyecto con VUE CLI, hay dos formas de hacerlo
    Por línea de comando (Por default y manual) y por interfaz de usuario, los comandos son los siguientes respectivamente:
    - [ ]  vue create mi-proyecto
    - [ ]  vue ui (se abrirá una interfaz en el navegador para empezar con la instalación)
    
- Para la presentación vamos a crear un proyecto parecido a Netflix
    - [ ]  Explicar la estructura de VUE CLI (Componentes, rutas, vistas, store)
    - [ ]  Crear una interfaz de registro y acceso de clientes para que puedan ver las películas
    - [ ]  Crear una cuenta de firebase, nos apoyaremos en el servicio de autenticación de firebase  para el registro y el acceso de clientes.
    - [ ]  Configuración de la autenticación de firebase con nuestra aplicación.
    - [ ]  Crear la interfaz donde se mostrará las películas
    - [ ]  Utilizar el servicio de una página externa que proporcionará el contenido, para eso usaremos AXIOS.
    - [ ]  Implementación del lazy load para evitar sobrecargar la aplicación con la cantidad de contenido que se mostrará, en cambio iremos cargando el contenido según el cliente lo requiera.
    - [ ]  Implementar un buscador de películas.
    - [ ]  Publicar el proyecto en el hosting de firebase
