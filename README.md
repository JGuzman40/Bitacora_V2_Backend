# MVP - Bitácora Microhuasca

Este repositorio contiene el backend del MVP de la Bitácora Microhuasca, una plataforma diseñada para acompañar procesos terapéuticos mediante el registro de reflexiones personales y el monitoreo del uso por parte de administradores.

## 🚀 Objetivo del Proyecto

El MVP busca validar dos aspectos fundamentales:
- ¿Las personas utilizan la app como bitácora?
- ¿Perciben un beneficio en su proceso al usarla?

## 🧑‍💼 Historias de Usuario

### Administrador
- **Registro de participantes**: para que puedan comenzar a registrar sus reflexiones.
- **Visualización de frecuencia de uso**: para hacer seguimiento al uso de la herramienta.

### Participante
- **Ingreso a la app**: con credenciales o enlace personal.
- **Visualización del día actual**: para referencia de avance.
- **Registro de reflexión por nota de voz**: sin necesidad de escribir.
- **Revisión de reflexiones anteriores**: para detectar patrones o avances.

## 🔧 Flujo Técnico del MVP

### 1. Frontend (SPA)
- Tecnologías sugeridas: React, Vite.
- Funcionalidades clave:
  - Registro de notas de voz.
  - Visualización del día actual.
  - Acceso y revisión de reflexiones.
  - Dashboard para administrador.

### 2. Backend (API REST)
- Tecnologías: Node.js, Express, Sequelize, PostgreSQL.
- Responsabilidades:
  - Autenticación.
  - Gestión de usuarios y registros.
  - Cálculo de métricas de uso.

### 3. Base de Datos
- Modelo relacional (PostgreSQL).
- Tablas sugeridas:
  - Usuarios (con roles).
  - Registros de reflexión (audio, fecha).
  - Avance del proceso.
  - Métricas de uso.

---

Desarrollado por  
**Jesu Guzmán – Full Stack Developer**
