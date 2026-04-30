# Frontend Fondo Francisco Cano - MUUA
Frontend del proyecto del Museo Universitario de la Universidad de Antioquia (MUUA), para la visualización del Fondo artístico Francisco Cano.
La aplicación permite: 
- Visitante: explorar obras, ver información del artista y anvegar colecciones.
- Búsqueda y filtros dinámicos de obras.
- Visualización tipo galería con modal interactivo.
- Admin (preparado para integración futura con backend): acceso autenticado para creación de nuevas colecciones o fondos de artistas.

# Arquitectura
Frontend desarrollado como Single Page Application con React
- UI basada en componentes reutilizables.
- Consumo de API REST.
- Estado local con hooks.
- Navegación con React Router.

# Tecnologías
- React 18
- TypeScript
- React Router DOM
- Axios (consumo de API)
- Lucide React (iconos)
- CSS global + estilos online
- Vite

# Arranque Rápido 
1. Instalar dependencias:
```bash
npm install
```
2. Crear variables de entorno
```bash
cp .env.example .env
```
3. Levantar entorno de desarrollo
```bash
npm run dev
```
4. Build de producción 
```bash
npm run build
```
5. Preview del build
```bash
npm run preview
```

# Arquitectura del proyecto
El frontend está organizado por capas:
```bash
src/
├── api/              # Configuración Axios y consumo de backend
├── components/       # Componentes reutilizables (Navbar, Carousel, Filtros, etc.)
├── context/          # Context API (Auth)
├── models/           # Tipos TypeScript (DTOs)
├── pages/            # Vistas principales (Home, Galería, FondoArtista, Login)
├── router/           # Configuración de rutas
├── images/           # Recursos locales (imágenes del museo/artistas)
```

# Flujo de la aplicación 
### 1. Home:
- Presentación del MUUA.
- Carrusel automático de imágenes del museo.
- Acceso a colecciones destacadas (Por el momento solo Fondo Francisco Cano).

### 2. Colecciones: (Por el momento solo Fondo Francisco Cano)
- Visualización de artistas.
- Cards con imagen destacada del artista.
- Navegación hacía los fondos individuales.

### 3. Fondo del Artista:
- Biografía estructurada.
- Galería de obras consumidas desde el backend.
- Modal de visualización de imágenes.

### 4. Galería general:
- Listado de obras del backend
- Filtros por:
   - Autor.
   - Técnica.
   - Año.
- Buscador global desde el navbar.

### 5. Autenticación
- login de administrador.
- JWT almacenado en localStorage.
- Interceptos Axios para Authorization Header.

# Endpoints utilizados
Públicos:
- GET /obras
- GET /obras/:id
- GET /obras/facets
- GET /autores
- GET /tecnicas
- GET /imagenes/obra/:obraId

Auth:
- POST /auth/login
- POST /auth/refresh
# Manejo de Imágenes:
Por el momento las impagenes pueden provenir de dos fuentes:
- Backend (URL absoluta).
- Archivos locales en src/images/ (fallback visual), para imagenes de la Home Page del MUUA.

