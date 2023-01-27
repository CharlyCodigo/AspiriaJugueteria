# El proyecto se creo con create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Procedimineto

-Se crean las carpetas correspondientes en este caso Atomos, Molecules y una carpeta para el uso de Contexto, demas de la configuracion de tailwind y typescript, para aplicar los estilos directamente por medio de clases y para el tipado respectivamente.

-Se analiza el maquetado y considerando el modelo atomico se consideran a los botones mas simples (input y label) como atomos, por lo cual se crean esos componentes para que estos puedan ser reutilizados, ademas se implementa el uso de Typescript para que estos solo acepten los tipos asignados dentro de su paso de propiedades en este caso "string" y "number" y asi controlamos el tipado de los productos y controlamos la validacion.

-el siguiente componente es "ViewListProduct" esta es la primera vista en la que se ve la tabla de los productos que se van a crear, este a su ves necesita el componente producto en el cual se visualiza las diferentes propiedades del producto "id, nombre, descripcion, minimo de años, compañia y precio", este se renderiza y se reutiliza en dicho componente en la parte del folder de moleculas.

-Se crea un nuevo componente para el formulario llamado "FormProduct" que es renderizado cada vez que se le da "click" al boton "new" de la vista "ViewListProduct", tambien es reutilizado cuando se le da "click" a el boton "edit".

-Hasta este punto se empieza a utilizar el contexto para poder compartir el objeto "product", ademas del array "ListProduct" que contiene todos los productos generados y con base a esto se realice la renderizacion por medio de un mapeo, ademas se comparten "estados" que se generaron para saber en que estatus nos encontrabamos si se estaba creando un nuevo producto o se estaba editando.

-Se colocaron dos imputs debajo de cada boton (edit, delete) ya que se necesitaba un "id" para saber que producto deberia de ser eliminado y que producto se necesitaba editar.

-Considerando el tamaño del producto no se generaron ramas para su desarrollo, quiza mi metodo seria generar una rama para cada modulo, siendo un modulo una molecula, pero dada la poca complejidad decidi no utilizarlo, sin embargo en ese sentido he hecho uso de los comandos "add .","commit", "pull", "push","status", "merge", "checkout" y he solucionado conflictos.

Para ejecutar presione npm start
