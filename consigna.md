# Módulo de Angular 2

# Aplicación de Sistema de Blog en Angular

El objetivo del ejercicio es desarrollar un sistema de blog en angular a través de un array de datos estático creado en el propio servicio de Angular. Es decir no hay que hacer conexión HTTP a ninguna API, es todo desde un array multidimensional de JSON.

**Descripción del ejercicio**

**Blog Angular:**

- Permitir a los usuarios crear publicaciones de viajes de blog a través de un formulario y visualizarlas
- El blog tiene que tener un listado de noticias y poder visualizar la noticia
- También podrá filtrar por categoria de los viajes y por titulo.

La aplicación que desarrollemos dispondrá de tres rutas

**/home.** Se trata de la ruta de acceso al blog donde aparecen el listado de Post que tengamos en el array antes mencionado

**/new.** Dentro de esta ruta encontramos el formulario que nos permita agregar post a nuestro blog. Los datos del blog son los siguientes.

- Titulo de la publicación
- Texto de la publicación
- Imagen del blog (en formato url no tenéis que subir el archivo físico)
- categoría de blog. (Categoría tendrá su propio interfaz)
- fecha de publicación.

Todos los campos son obligatorios y el formulario tendrá que validar que se introducen correctamente, tendrías que crear un validador propio que permita comprobar que la url esta correcta a través de una expresión regular (tal y como hicimos en el DNI)

El selector de categorias se llenará de un array de categorías que estará en el su propio servicio.

**/post/:idpost.** Esta vista mostrará la vista del post con toda la información de la publicación

**Categorías de Post:**

- El selector de categorias podreis colocarlo donde querais, teniendo en cuenta donde este, deberéis usar una tecnica u otra para obtener la categoría. Output o Params.

**Filtros y Búsquedas:**

- Permitir al usuario filtrar los post por categoria .
- Implementar un campo de búsqueda para encontrar post específicos por titulo.

La maquetación la tendréis que hacer con CSS y Bootstrap como framework de css para ayudaros a

**PASOS A SEGUIR:**

Definir el interfaz de datos de nuestra aplicación. En este caso tendremos que definir el interfaz Post que cuenta con las siguientes propiedades:

- **id, Titulo, texto, autor, imagen (puede ser una url), fecha, categoria:ICategory**

Y el interfaz de Category que cuenta con las siguientes propiedades.

- **id, Titulo**

El siguiente paso es la creación del Servicio que se encargará de manejar la información de nuestra aplicación.

Dentro del servicio necesitamos definir un array como propiedad del mismo donde insertaremos los diferentes Post. Y otro array como propiedad donde crearemos 5 categorías, Playa, Montaña, Ciudad, Rural, Festivales.

Dicho servicio dispondrá de un método **insert(Post)** que nos permitirá agregar los Post cuando lo indiquemos desde el formulario

Además incluiremos el método **getAll** para recuperar todos los Post de nuestro blog

Y por último definiremos el método **getByCategoria(cat)** para que nos devuelva los post de una categoría concreta

El siguiente elemento a definir es el componente **BlogComponent** Se trata de un componente que, recibe del servicio todos los Post y los muestra de manera ordenada.

Disponer de un selector de categorías que nos permitan filtrar por categoría. Este se llenará desde una array de categorías del servicio el servicio a través de un método

**getAllCategories()**

Metodo **getById(id**) que me devolverá la información de un solo post.

Desarrollaremos el componente **FormularioComponent** Este componente representa un formulario con los diferentes campos del modelo Post. Cuando pulsemos el botón enviar, el formulario debe mandar al servicio la información del nuevo Post para que se almacene junto a los demás, previamente de haberlo validado.

Desarrollaremos el componente **ViewPost** donde se muestra la información del post individualmente

### **Requisitos Técnicos:**

- **Componentes Angular**: Crear componentes para la lista de post, formulario de creación de post.
- **Servicios Angular**: Implementar servicios para la gestión de los post y de categorias.
- **Formularios Reactivos**: Utilizar formularios reactivos para añadir y editar los post, con validaciones adecuadas.
- **Interfaces:** Tipados correctamente los datos

### **Entregables:**

- Código completo de la aplicación en Angular.
- Repositorio de codigo en github por tareas, y muchos commit.

| Este criterio depende de una competencia del aprendizaje Estructura y Organización del Proyecto Evaluación de la estructura del proyecto y la correcta separación en componentes y servicios. | 10 puntos |
| --- | --- |
| Este criterio depende de una competencia del aprendizajeGestión y Creación de Post Implementación correcta de la creación, visualización y eliminación de post, con validaciones adecuadas. | 20 puntos |
| Este criterio depende de una competencia del aprendizajeVista de post individual y uso de rutas Funcionalidad completa para mostrar el post individual y captura de rutas | 15 puntos |
| Este criterio depende de una competencia del aprendizaje Filtros y Búsquedas Implementación de filtros avanzados y búsqueda para gestionar y encontrar post especificos por nombre y categoria | 25 puntos |
| Este criterio depende de una competencia del aprendizaje Formularios Reactivos y Validaciones Uso de formularios reactivos para la creación de gastos, con validaciones en los campos de entrada. | 20 puntos |
| Este criterio depende de una competencia del aprendizaje Calidad del Código y OrganizaciónCódigo limpio, bien organizado y comentado, siguiendo las mejores prácticas de Angular. | 5 puntos |
| Este criterio depende de una competencia del aprendizaje Extras / InnovacionesPuntos adicionales por funcionalidades extras como notificaciones, exportación de datos, o integración con APIs externas. | 5 puntos |
| Puntos totales: 100 |  |