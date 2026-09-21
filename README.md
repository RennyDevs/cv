# CV personal

Sitio web personal para mostrar un CV/resumen profesional construido con Astro y Tailwind CSS.

## Descripción

Este proyecto sirve como portafolio profesional y perfil de currículum, con una estructura de datos centralizada para mantener el contenido fácil de editar y reutilizable en los componentes.

La página principal compone secciones como:
- Hero / presentación
- Sobre mí
- Experiencia profesional
- Educación
- Habilidades

## Estructura principal

```text
/
├── src/
│   ├── components/
│   ├── data/
│   │   └── cv_esp.ts
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── README.md
└── tailwind.config.mjs
```

## Comandos

Desde la raíz del proyecto:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Docker: desarrollo y producción

Este proyecto admite dos modos de ejecución en contenedor, y pueden coexistir sin problema porque tienen objetivos distintos:

### 1) Desarrollo

Usa el archivo por defecto de Docker Compose para trabajar localmente con live reload:

```bash
docker compose up --build
```

Esto ejecuta Astro en modo desarrollo y expone la app en:

```text
http://localhost:4321
```

La configuración usa `npm run dev -- --host 0.0.0.0` y habilita HMR.

### 2) Producción

Para levantar una versión preparada para servir el build final, usa este archivo adicional:

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

Esto compila la app con `npm run build` y luego sirve la carpeta `dist` con `npm run preview -- --host 0.0.0.0 --port 4321`.

La app queda disponible en:

```text
http://localhost:8080
```

Esto evita mezclar la versión de desarrollo con la de producción y permite tener ambos servicios abiertos al mismo tiempo sin conflicto.

### Diferencias clave

- Desarrollo: `astro dev`, hot reload, consola de desarrollo, puertos 4321 y HMR 24678
- Producción: `astro build` + `astro preview`, sin watcher, preparado para servir la build final

## Personalización del contenido

La información del CV se mantiene principalmente en:

- `src/data/cv_esp.ts`

Ese archivo contiene la información personal, experiencia, educación y habilidades. En la mayoría de los casos, conviene editar ahí antes de tocar los componentes.

La composición de la página se mantiene en:

- `src/pages/index.astro`

## Herramientas y stack

- Astro
- TypeScript
- Tailwind CSS
- Vite

## Validación

Antes de cerrar cambios relevantes, se recomienda ejecutar:

```bash
npm run build
```

Esto valida que el proyecto compila correctamente y que no hay errores de tipado.

## Nota

El repositorio está pensado para cambios pequeños, enfocados y con estructura simple. Se prioriza mantener el contenido del CV en datos y evitar duplicación de texto en componentes.
