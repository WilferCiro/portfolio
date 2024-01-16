---
layout: ../../presentation/layouts/BlogPostLayout.astro
title: Arquitectura hexagonal con nestjs
author: Wilfer Daniel Ciro Maya
year: "2023, November"
keywords: nestjs, nodejs, hexagonal, arquitectura, programación, desarrollo, backend, sql, no sql.
description: Aprende a implementar la arquitectura hexagonal con nestjs, utilizando ejemplos prácticos y accediendo al código de ejemplo.
image: /images/blogs/hexagonal-nestjs/image1.jpg
title_image: /images/blogs/hexagonal-nestjs/title-image.jpg
id: hexagonal_nestjs
---

En este se mostrará la implementación de una arquitectura hexagonal en nestjs, que puede servir como base para cualquier proyecto backend.

## Enlaces

- [Repositorio del código](https://github.com/WilferCiro/sales_backend)

## Requisitos

- Node.js (versión v18.16.0 o superior)
- NPM (versión 9.5.1)

La arquitectura hexagonal es una forma de organizar el software para que sea más fácil de entender y mejorar. Imagina que el "corazón" del software es la parte principal que realiza las tareas importantes. Luego, alrededor de ese corazón, tienes capas que se encargan de comunicarse con el mundo exterior, como la interfaz de usuario o las bases de datos. Esta organización ayuda a que el software sea más flexible y sencillo de probar y mantener.

Entre sus principales ventajas está:

- **Desacoplamiento:** Permite separar la lógica de negocio del código que maneja las entradas y salidas, lo que facilita realizar cambios en una parte del sistema sin afectar otras.
- **Flexibilidad:** Al dividir el sistema en capas, es más fácil adaptarse a cambios en los requisitos del negocio o incorporar nuevas tecnologías sin afectar la lógica principal.
- **Facilita las pruebas:** La separación de capas hace que sea más sencillo realizar pruebas automatizadas, ya que se pueden probar las diferentes partes del sistema de manera independiente.
- **Reutilización de código:** La estructura modular facilita la reutilización de componentes en diferentes partes del sistema o incluso en proyectos diferentes.
- **Fácil mantenimiento:** La claridad en la separación de responsabilidades simplifica la identificación y corrección de problemas, así como la introducción de mejoras.
- **Adaptabilidad a interfaces externas:** Puede integrarse fácilmente con diferentes interfaces de usuario, bases de datos y servicios externos sin afectar la lógica central del sistema.
- **Escalabilidad:** La arquitectura hexagonal proporciona una base sólida para escalar el sistema, ya que las diferentes capas pueden escalarse de manera independiente según sea necesario.

Aunque también tiene sus desventajas como:

- **Complejidad inicial:** Implementar la arquitectura hexagonal puede resultar más complejo al principio, ya que se requiere un diseño cuidadoso de las capas y la interacción entre ellas.
- **Posible exceso de abstracción:** Si no se maneja correctamente, la introducción de demasiadas capas y abstracciones puede llevar a una complejidad innecesaria, dificultando la comprensión del sistema.
- **Aumento del número de clases/interfaces:** La estructura modular puede resultar en un mayor número de clases e interfaces, lo que podría complicar la navegación y comprensión del código para algunos desarrolladores.
- **Mayor consumo de recursos:** La introducción de capas adicionales puede tener un ligero impacto en el rendimiento, ya que cada capa introduce cierta sobrecarga en términos de comunicación y procesamiento.
- **Dificultad en pequeños proyectos:** En proyectos pequeños o simples, la arquitectura hexagonal puede parecer excesiva y agregar complejidad innecesaria.
- **Necesidad de planificación cuidadosa:** Requiere una planificación cuidadosa y una comprensión clara de los requisitos del sistema para evitar la introducción de complejidades innecesarias.

Por ello en mi opinión personal, el uso de arquitecturas de este estilo debería estar enfocado en proyectos a largo plazo que tienden a crecer, mientras que los proyectos que se usarán poco tiempo no justifican el despliegue técnico que trae consigo está arquitectura

## Estructura de carpetas

Vamos a separar nuestro proyecto nestjs por entidades, en este ejemplo particular tengo users (que llama a una api externa para la validación de datos) y sales, por cada entidad generó una serie de carpetas así:

- src
  - users
    - architecture
        - controller
            - users.controller.ts
        - http
            - users.repository.ts
        - mapper
            - users.mapper.ts
        - dto
            - user.create.dto.ts
            - user.update.dto.ts
            - user.output.dto.ts
        users.module.ts
    - application
        - users.services.ts
    - domain
        - interfaces
            - User.ts
            - users.repository.interface.ts
            - users.service.interface.ts
  - sale
    - architecture
        - controller
            - sale.controller.ts
        - mongodb
            - sale.repository.ts
            - entity
                - SaleEntity.ts
        - mapper
            - sale.mapper.ts
        - dto
            - sale.create.dto.ts
            - sale.update.dto.ts
            - sale.output.dto.ts
        sale.module.ts
    - application
        - sale.services.ts
    - domain
        - interfaces
            - Sale.ts
            - sale.repository.interface.ts
            - sale.service.interface.ts

### application

Esta carpeta contiene la capa de aplicación de la Arquitectura Hexagonal. Define los casos de uso y orquesta el flujo de datos entre las capas de dominio e infraestructura. Cada caso de uso se implementa como un módulo separado dentro de esta carpeta.

### domain

La carpeta de dominio contiene la lógica empresarial central y los modelos de dominio de la aplicación. Es independiente de cualquier dependencia externa y representa el núcleo de la Arquitectura Hexagonal.

### architecture

Esta carpeta contiene los detalles de implementación de la infraestructura. Incluye marcos, bibliotecas y bases de datos. En este proyecto, utilizamos MongoDB como la base de datos subyacente, y el código para interactuar con la base de datos se ubica dentro de esta carpeta.

En esta carpeta se ubica todo lo relacionado con nestjs, además de algunos mappers que me permitan transformar la información de arquitectura a dominio y así tener en las capas internas (domain, application) los datos en el domino.

El ejemplo completo se encuentra en el [repositorio de github](https://github.com/WilferCiro/sales_backend), no olvides revisar el README