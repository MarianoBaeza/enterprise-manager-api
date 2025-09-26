````
# Desafío Técnico - Gestión de Empresas y Transferencias

## 🧪 Descripción del Proyecto

Este proyecto es una API desarrollada en **NestJS (Standalone)** para gestionar información de empresas y sus transferencias. El objetivo del desafío fue evaluar capacidad técnica, criterio de diseño y nivel de autonomía en la implementación de endpoints y modelado de datos.

La solución está diseñada para ser **clara, mantenible y escalable**, siguiendo buenas prácticas de **Clean Code** y separación de responsabilidades.

---

## 🎯 Requerimientos Funcionales Implementados

La API cuenta con los siguientes endpoints:

1. **Obtener empresas que realizaron transferencias en el último mes**
2. **Obtener empresas que se adhirieron en el último mes**
3. **Registrar la adhesión de una nueva empresa**
   - Se soportan dos tipos de empresa:
     - Pyme
     - Corporativa

---

## Requerimientos Técnicos

- **Framework:** NestJS (Standalone)
- **Base de datos:** SQLite local usando **Prisma ORM**
- **Arquitectura:** Modular (recomendada por NestJS) con enfoque en **Clean Architecture**
- **Testing:** Se realizaron pruebas **unitarias con Jest** y **e2e con Postman**
- **Persistencia de datos:** Local, mediante SQLite y seeding de datos con Prisma
- **Variable de entorno:** Crear un archivo `.env` en la raíz del proyecto con la siguiente línea:
  ```
  DATABASE_URL="file:./dev.db"
  ```

---

## ⚙️ Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear el archivo `.env` en la raíz del proyecto:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. Inicializar la base de datos y seed de datos:
   ```bash
   npx prisma db seed
   ```

5. Ejecutar la aplicación en modo desarrollo:
   ```bash
   npm run start:dev
   ```

6. Ejecutar tests:
   ```bash
   npm test
   ```

---

## Decisiones de Diseño

- **Arquitectura Modular de NestJS:** Facilita la escalabilidad y el mantenimiento.
- **Prisma ORM:** Simplifica la interacción con la base de datos SQLite y permite una migración futura a otros motores si se desea.
- **Código limpio y separación de responsabilidades:** Cada módulo, servicio y controlador tiene una función clara, siguiendo principios de **Clean Code**.
- **Pruebas unitarias con Jest y e2e con Postman:** Aseguran que la API cumple con los requerimientos funcionales y facilita la detección temprana de errores.

---

## Parte Teórica - Lambda Function (AWS)

Por cuestiones de tiempo y falta de experiencia, **la Lambda Function no fue implementada**.

---

## Consideraciones

- La API está lista para ejecutarse localmente, sin necesidad de contenedores ni despliegue en la nube.
- El proyecto cumple con los requisitos funcionales y pruebas unitarias/e2e.
- La parte de AWS Lambda se encuentra en diseño teórico, pero documentada para futura implementación.

---

## Comandos Rápidos

| Acción                   | Comando              |
| ------------------------ | -------------------- |
| Instalar dependencias    | `npm install`        |
| Ejecutar seed de la base | `npx prisma db seed` |
| Correr API en dev        | `npm run start:dev`  |
| Ejecutar tests           | `npm test`           |

---

## Notas Finales

Este proyecto refleja la implementación de un backend **modular, escalable y limpio**, con enfoque en buenas prácticas y pruebas, listo para futuras ampliaciones (como integración real con AWS Lambda o despliegue en la nube).

```

```
````
