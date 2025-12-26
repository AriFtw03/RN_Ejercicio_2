# Taller 5: Desarrollo de APP Evolutiva con React Native

## Ejercicio 2: Menú Lateral (Drawer) y Navegación Anidada
### Conceptos Clave

#### 1. ¿Qué es Drawer Navigation?
Es un sistema de navegación en el que las opciones se muestran en un menú lateral oculto que se despliega mediante un gesto o un botón  Técnicamente, es un navigator que no reemplaza a las pantallas, sino que cambia la forma de acceder a los módulos principales de la aplicación.

#### 2. ¿Qué es Navegación Anidada?
Es una técnica donde un tipo de navegación contiene a otro dentro de su estructura. En este ejercicio, el Drawer actúa como el contenedor principal y dentro de una de sus opciones se encuentra el sistema de Tabs. Esto permite tener jerarquías complejas sin perder claridad en la navegación.

#### 3. ¿Por qué se reutilizan pantallas en lugar de duplicarlas?
La reutilización de pantallas es fundamental para evitar la duplicación de código y mejorar la mantenibilidad del proyecto.Permite aplicar el principio de separación de responsabilidades, donde las pantallas solo manejan la lógica de la interfaz y pueden ser invocadas desde distintos navegadores sin necesidad de reescribir su código.