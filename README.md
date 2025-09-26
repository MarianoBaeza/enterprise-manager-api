# 🚀 Desafío Técnico - Gestión de Empresas y Transferencias

## 🧪 Descripción del Proyecto

Esta API está desarrollada en **NestJS (Standalone)** y permite gestionar información de empresas y sus transferencias.  
El objetivo del desafío fue **evaluar capacidad técnica, criterio de diseño y autonomía** en la implementación de endpoints y modelado de datos.

La solución se centra en ser **clara, mantenible y escalable**, siguiendo buenas prácticas de **Clean Code** y separación de responsabilidades.

---

## 🎯 Requerimientos Funcionales Implementados

La API ofrece los siguientes endpoints principales:

1. **Obtener empresas que realizaron transferencias en el último mes**  
2. **Obtener empresas que se adhirieron en el último mes**  
3. **Registrar la adhesión de una nueva empresa**  
   - Tipos de empresa soportados:
     - Pyme
     - Corporativa

---

## 🛠️ Requerimientos Técnicos

- **Framework:** NestJS (Standalone)  
- **Base de datos:** SQLite local con **Prisma ORM**  
- **Arquitectura:** Modular, siguiendo **Clean Architecture**  
- **Testing:**  
  - Pruebas **unitarias** con Jest  
  - Pruebas **e2e** con Postman  
- **Persistencia de datos:** Local, con seeding mediante Prisma  
- **Variable de entorno:** Crear archivo `.env` en la raíz:
  ```env
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

3. Crear archivo `.env`:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. Inicializar base de datos y seed de datos:
   ```bash
   npx prisma db seed
   ```

5. Ejecutar la API en modo desarrollo:
   ```bash
   npm run start:dev
   ```

6. Ejecutar tests:
   ```bash
   npm test
   ```

---

## 📝 Decisiones de Diseño

- **Arquitectura Modular de NestJS:** Facilita escalabilidad y mantenimiento.  
- **Prisma ORM:** Simplifica la interacción con SQLite y permite migrar a otros motores fácilmente.  
- **Código limpio y separación de responsabilidades:** Cada módulo, servicio y controlador tiene un propósito claro.  
- **Testing con Jest y Postman:** Garantiza funcionalidad y facilita detección temprana de errores.

---

## ☁️ Parte Teórica - Lambda Function (AWS)

Por cuestiones de tiempo y experiencia, **la Lambda Function no fue implementada**.

---

## 📌 Consideraciones

- La API se ejecuta localmente, sin contenedores ni despliegue en la nube.  
- Cumple con los requisitos funcionales y pruebas unitarias/e2e.  

---

## ⚡ Comandos Rápidos

| Acción                    | Comando              |
|----------------------------|--------------------|
| Instalar dependencias      | `npm install`      |
| Ejecutar seed de la base   | `npx prisma db seed` |
| Correr API en desarrollo   | `npm run start:dev` |
| Ejecutar tests             | `npm test`         |

---

## 🎉 Notas Finales

Este proyecto refleja un backend **modular, escalable y limpio**, con enfoque en buenas prácticas y pruebas, listo para futuras mejoras, como integración con AWS Lambda o despliegue en la nube.

