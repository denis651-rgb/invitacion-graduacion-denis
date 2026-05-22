# Invitacion de Graduacion - Ing. Denis Guarayo

Invitacion digital web creada con React, Vite, Tailwind CSS, Framer Motion y lucide-react. Esta preparada como frontend estatico para publicarse facilmente en Vercel.

## Instalar

```bash
npm install
```

## Correr en desarrollo

```bash
npm run dev
```

Luego abre la URL local que muestre Vite, normalmente `http://localhost:5173`.

## Imagenes

Coloca las imagenes finales en:

- `src/assets/foto-denis.png`
- `src/assets/logo-fini.png`
- `public/preview-invitacion.jpg`

Si aun no estan disponibles, la invitacion muestra placeholders visuales elegantes para mantener el diseno completo.

La imagen `public/preview-invitacion.jpg` se usa para la vista previa en WhatsApp y redes sociales. Idealmente debe medir 1200x630 px.

## Build de produccion

```bash
npm run build
```

El resultado se genera en `dist/`.

## Publicar en Vercel

1. Sube este proyecto a GitHub desde la raiz del repositorio.
2. En Vercel, elige **Add New Project**.
3. Importa el repositorio.
4. Usa la configuracion por defecto:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: dejar vacio o usar `./`
5. Publica el proyecto.

## Datos incluidos

- Graduado: Ing. Denis Guarayo
- Evento: Graduacion de Ingenieria en Sistemas
- Fecha: 19 de junio de 2026
- Acto: Facultad Integral Ichilo FINI, 16:00 hrs
- Recepcion: Nuevo Horizonte Km 35, Barrio 1ro de Mayo, 20:00 hrs
- Confirmacion por WhatsApp integrada
