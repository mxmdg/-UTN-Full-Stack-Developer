<p align='left'>
  <img src="https://www.frba.utn.edu.ar/wp-content/uploads/2019/10/logo-UTNBA-PNC-2016-2019-e1570223041254.png" />
</P>

# `Trabajo práctico Extra - Tablero de Basquet (optativo)`

## `Instalación de dependencias:`

Ingresar a la carpeta Tp-tablero, donde se encuentra el archivo `package.json` y ejecutar el siguiente comando para instalar todas las dependencias:

```
npm install
```

Una vez que se instaló todas las dependencias ya podemos levantar nuestra aplicación con el comando:

```
npm start
```

Su aplicación debería verse de la siguiente manera:

![Prev](/img/tab_1.png)

<br><br>

## Consignas

Dentro de la carpeta `src` van a estar todos nuestros archivos de la aplicación. Nosotros comenzaremos trabajando en el archivo `Tablero.jsx`, que es nuestro componente inyectado en `App.js`.
En este mismo encontramos un `h4`, luego un contendor principal que contiene dos contendores extras dentro. Uno es para el equipo local, el otro para el visitante. Adentro vamos a encontrar una inyección a un componente dónde vamos a trabajar primero:

- Abrir el componente `Equipo.jsx` que se encuentra dentro de la carpeta `components`.

Podemos ver que aquí dentro tenemos un `div` que contiene toda la cabecera de nuestro tablero. Como podemos notar necesitamos pasarle por props un título (este contendrá solo si es local o visitante), un contador (que será el contador de nuestro estado del tablero) y una imagen, que esta ya la estamos recibiendo cómo `bandera`.

- Pasar por props toda la información requerida en el componente `Equipo.jsx`.

Luego de nuestro componente podemos ver 6 botones, 3 suman y 3 restan puntos.

- Implementar funciones que cambien el estado de mi contador, si el botón indica `+ 1`, debe sumar un punto, si indica `- 2` , debe restar dos puntos. Así con el resto de los botones. Tengan en cuenta que tenemos dos contadores inicializados en 0, uno para local y otro para visitante.

- Por último implementar la función que reinicie el tablero y así dejando los contadores en 0.

Resultado final:

![Prev](/img/tablero.gif)

---

---

En la carpeta "Resolución" van a encontrar la resolución del ejercicio. Valga la redundancia.

[Subir al índice](#top)
