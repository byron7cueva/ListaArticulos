#ListaArticulos
Listado de Articulos con AngularJS
NOTA: El proyecto no funciona sin servidor http, ya que necesita que se resuelvan las urls, de los recursos.

##Correr
###Con un servidor web como Apache HTTP
Intalar Apache HTTP
Poner el proyecto en la carpeta raiz
Correr el servidor
Ingresar desde un navegador a la url: http://localhost:80
NOTA: Depende del puerto que este configurado

###Con un servidor HTTP temporal con Python
Debe tener instalado python 2.7
Ingresar a una terminal
Ubicarce en la carpeta raiz del proyecto
Ejecutar el comando: python -m SimpleHTTPServer
Ingresar desde un navegador a la url: http://localhost:8000
NOTA: Por defecto se sube los servicios en el puerto 8000

###Con grunt
Debe tener instalado Node.js
Ingresar a una terminal.
Instalar grunt-cli: npm install -g grunt-cli
Ubicarce en la carpeta raiz del proyecto
Ejecutar: npm install
Luego Ejecutar: grunt
Ingresar desde un navegador a la url: http://localhost:3000