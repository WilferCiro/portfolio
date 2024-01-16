---
layout: ../../../presentation/layouts/BlogPostLayout.astro
title: Verilog Mips Microprocessor
author: Wilfer Daniel Ciro Maya
year: "2023, October"
keywords: Microprocesador, mips, verilog, fpga, sistemas digitales, diseño, arquitectura, hdl
description: En este blog crearemos una microprocesador mips de 32 bits con pipeline utilizando HDL verilog.
image: /images/blogs/mips/image1.jpg
title_image: /images/blogs/mips/title-image.jpg
id: mips
---

En este blog se mostrará el paso a paso para crear un microprocesador mips de 32 bits con pipeline utilizando HDL verilog, como referencia bibliográfica se utilizará el libro "Digital design and computer architecture" de *David Money Harris* y *Sarah L. Harris*. Este microprocesador puede ser implementado en una [FPGA](https://es.wikipedia.org/wiki/Matriz_de_puerta_programable_en_campo), utilizando programas especializado para ello como lo son [vivado](https://www.xilinx.com/support/download.html) o [quartus](https://www.intel.la/content/www/xl/es/products/details/fpga/development-tools/quartus-prime/resource.html)

![Arquitectura del microprocesador](/images/blogs/mips/image2.jpg)

## Enlaces

- [Link al repositorio](https://github.com/WilferCiro/blog-mips32bits)
- [Digital design and computer architecture](https://www.amazon.com/Digital-Design-Computer-Architecture-Harris/dp/0123944244)

## Sobre MIPS

MIPS (Microprocessor without Interlocked Pipeline Stages) es una arquitectura de microprocesadores de tipo RISC (Reduced Instruction Set Computing) que se caracteriza por su conjunto de instrucciones simple y optimizado. Los procesadores MIPS utilizan un pequeño número de registros de propósito general y emplean técnicas de pipelining para mejorar la velocidad de procesamiento al dividir la ejecución de las instrucciones en etapas.

### Partes a desarrollar

- ALU,  que se encarga de realizar operaciones aritméticas y lógicas
- Register file, actúa como una memoria temporal donde se almacenan valores e instrucciones temporalmente.
- Data memory, componente donde se almacenan las intrucciones a ejecutar
- Program counter, componente que mantiene el registro de la instrucción actual
- Ports, componente que puede escribir y leer datos físicos a través de los pines de la FPGA
- Ports memory, componente que almacena en registros los valores actuales de los puertos, tanto de entrada como de salida
- Control path, máquina de estados encargada de gestionar el control de la aplicación
- Data path, máquina de estados encargada de la gestión de datos en el microprocesador

Todos estos componentes están desarrollados y conectados entre sí en el [repositorio del proyecto](https://github.com/WilferCiro/blog-mips32bits).

#### ALU

La ALU desarrollada tiene 3 entradas de datos, una con el selector y otras dos con los valores a operar, la operación se realiza dependiendo del valor del selector, además tiene 4 salidas que son: Resultado (R), flagC que determina si la operación se desbordó de los 32 bits, flagN que determina si la operación tiene resultado negativo, y flagZ que determina si la operación fue cero. a continuación se muestran las operaciones que realiza la ALU ([Ver código](https://github.com/WilferCiro/blog-mips32bits/blob/main/modules/alu.v))

```sh
Selector | Operation
---------------------
     000 | SUM
     001 | SUB
     010 | AND
     011 | OR
     100 | XOR
     101 | None (R = 0)
     110 | None (R = 0)
     111 | None (R = 0)
   other | None (R = 0)
```

#### Registers file

Este componente es básicamente una memoria ram donde se almacenan valores temporales que se utilizan durante todo el pipeline del microprocesador. ([Ver código](https://github.com/WilferCiro/blog-mips32bits/blob/main/modules/sram.v))

#### Data memory

Este componente es una memoria ROM que tiene almacenadas las instrucciones que ejecutará el microprocesador, en este ejemplo particular contiene una 164 instrucciones que permiten a través de los puertos del microprocesador realizar un conteo con un display LCD. ([Ver código](https://github.com/WilferCiro/blog-mips32bits/blob/main/modules/flash.v))

#### Program counter (PC)

Este componente se encarga de seguir el índice de la instrucción actual, se actualiza dependiendo de la instrucción presente en la memoria ROM, por ejemplo: el valor del PC actual es 10, si existe una instrucción de JUMP -7, este PC a través de la ALU actualiza su valor a 3, mientras que si es una instrucción normal, se actualiza en +1. ([Ver código](https://github.com/WilferCiro/blog-mips32bits/blob/main/modules/program_counter.v))

#### Ports

A este microprocesador le implementé un componente que permite comunicarse con el mundo exterior a través de los pines de la FPGA, este componente tiene 8 registros donde se almacenan los valores a escribir en los pines. ([Ver código](https://github.com/WilferCiro/blog-mips32bits/blob/main/modules/ports.v))

#### Ports Memory 

Adicional a los puertos, creé este componente que se encarga de alternar entre los datos presentes en los puertos de lectura y los datos de la ROM, permitiendo realizar operaciones con datos del mundo exterior, además sirve como medio de control para saber si se activa la escritura en los puertos. ([Ver código](https://github.com/WilferCiro/blog-mips32bits/blob/main/modules/port_memory.v))

#### Control path

El control path es un componente que se encarga de realizar la conexión de todas las señales de control del microprocesador, también tiene implementadas lógicas con operaciones lógicas para tener un mejor control sobre los datos. ([Ver código](https://github.com/WilferCiro/blog-mips32bits/blob/main/modules/control_path.v))

#### Data path

Este componente permite el flujo de datos a través de todo el microprocesador, estos datos fluyen gracias a los valores brindados por el control path que por ejemplo activa o desactiva señales de habilitado en registros. ([Ver código](https://github.com/WilferCiro/blog-mips32bits/blob/main/modules/data_path.v))

### Microprocesador

Teniendo todos los componentes desarrollados, se procede a realizar la conexión de todos estos siguiendo el esquema de la imagen presentada, finalmente se utiliza vivado para el proceso de síntesis e implementación. ([Ver código](https://github.com/WilferCiro/blog-mips32bits/blob/main/modules/microprocessor.v))

### Código de la memoria ROM

(Ver página 552 del libro guía), las instrucciones que ejecuta el microprocesador tienen 32 bits, de los cuales los 6 bits más significativos son el tipo de instrucción que ejecutará (opcode), y el resto de bits dependiendo del tipo de instrucción se utiliza para las operaciones necesarias, por ejemplo la instrucción: `b001111_00000_00010_00000_00000000010` -> LUI $t1, 2

```sh
Valor             | Definición
------------------------------------------------------
001111            | Opcode LUI (asignación en memoria)
00000_00010       | Registro al cual asignar
00000_00000000010 | Valor que se asignará
```

En esta operación, se utilizan los 6 bits más significativos como opcode, los siguientes 10 bits como dirección en memoria y los 16 bits restantes como el valor. Así mismo, cada instrucción tiene su estructura de datos

En el ejemplo del repositorio, el código de la memoria ROM ejecuta una serie de instrucciones que permiten tener a la salida de los puertos, 1s y 0s que permiten en un LCD mostrar el número de un contador (desde el 1 hasta el 9) y activando un motor cuando llega al número 9.

### ¿Qué sigue?

Descarga el repositorio, instala vivado o quartus, genera un proyecto con el código descargado, asigna los puertos físicos de la FPGA a los puertos del componente `ports`, realiza el RTL, la síntesis, la implementación, el bitstream y cárgalo en tu FPGA. También puedes utilizar los archivos tb_*.v para realizar simulaciones de los componentes individualmente.

Como alternativas de software libre para la simulación, puedes utilizar [GTKwave](https://gtkwave.sourceforge.net/) e [icarus verilog](https://bleyer.org/icarus/).