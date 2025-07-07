# Estructura del Proyecto Soft Jobs

## Directorios Principales

- **database/**: Contiene scripts SQL para la base de datos
  - `DDL.sql`: Script de definición de datos (creación de tablas)
  - `DML.sql`: Script de manipulación de datos (datos iniciales)

- **public/**: Archivos públicos accesibles
  - `javascript.svg`: Icono SVG para la aplicación

- **src/**: Código fuente principal de la aplicación
  - `App.css`: Estilos principales
  - `App.jsx`: Componente principal de la aplicación
  - `main.jsx`: Punto de entrada de la aplicación

## Subdirectorios de src

- **components/**: Componentes reutilizables
  - `Navigation.jsx`: Barra de navegación principal

- **config/**: Configuraciones
  - `constans.js`: Constantes de la aplicación

- **contexts/**: Contextos de React
  - `Context.js`: Contexto global de la aplicación

- **hooks/**: Hooks personalizados
  - `useDeveloper.js`: Hook para manejar datos del desarrollador

- **views/**: Vistas principales
  - `Home.jsx`: Página de inicio
  - `Login.jsx`: Página de inicio de sesión
  - `Profile.jsx`: Página de perfil
  - `Register.jsx`: Página de registro

## Archivos en Raíz

- `.gitignore`: Archivos ignorados por Git
- `LICENSE.md`: Licencia del proyecto
- `package.json`: Configuración y dependencias del proyecto
- `package-lock.json`: Versiones exactas de dependencias
- `index.html`: Página HTML principal
- `vite.config.js`: Configuración de Vite

Esta estructura sigue las mejores prácticas para una aplicación React con Vite, separando claramente los componentes, vistas y lógica de la aplicación.