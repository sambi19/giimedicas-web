# GII Médicas — Sitio web

Sitio web estático de **GII Médicas**, mayorista en equipos médicos alternativos.
Reemplaza el sitio anterior de `giimedicas.com` conservando su estructura
(Inicio, Quiénes somos, Productos, Términos y condiciones, Contáctenos) con un
diseño actual, responsive y optimizado para conversión por WhatsApp.

Cobertura comercial: **toda Latinoamérica**, con envíos por transportadora y
courier internacional.

## Contenido

```
index.html                 Página única con todas las secciones
styles.css                 Hoja de estilos (variables CSS, sin dependencias)
script.js                  Menú móvil, filtros de catálogo, animaciones, formulario
assets/favicon.svg         Ícono del sitio
assets/img/                Fotografías de los equipos (1200x900, normalizadas)
assets/img/banner/         Versiones panorámicas para el banner (2000x1000)
robots.txt · sitemap.xml   SEO básico
_headers                   Cabeceras de seguridad y caché (Netlify / Cloudflare Pages)
```

## Características

- **Sin dependencias ni build.** HTML, CSS y JavaScript puro. Se publica tal cual.
- **Responsive** desde 320 px hasta escritorio.
- **Banner animado** en la portada: 4 láminas con rotación automática cada 6,5 s, zoom
  lento sobre la fotografía, flechas, puntos, deslizamiento táctil y flechas del teclado.
  Se pausa al pasar el cursor, al enfocar con teclado y con la pestaña en segundo plano.
- **Catálogo filtrable** por categoría (NLS, biorresonancia, diagnóstico, terapia).
- **Ficha de producto emergente:** al tocar cualquier equipo se abre un modal con la
  fotografía ampliada, la explicación completa, las especificaciones y el enlace directo
  a WhatsApp con el mensaje ya redactado para ese equipo.
- **Formulario que abre WhatsApp** con el mensaje ya redactado — no requiere backend.
  Incluye selector de país (20 opciones) para calificar el lead desde el primer contacto.
- **SEO:** metadatos Open Graph, datos estructurados `schema.org/Organization`,
  `sitemap.xml` y `robots.txt`.
- **Accesibilidad:** navegación por teclado, `aria-*` en el menú, el carrusel y el modal,
  foco atrapado dentro de la ficha, textos alternativos descriptivos y soporte de
  `prefers-reduced-motion`.
- **Degradación elegante:** el contenido solo se oculta para animarse cuando hay
  JavaScript (clase `js` en `<html>`); sin él, todo el texto se ve igualmente.

## Imágenes

Las fotografías originales tenían tamaños y encuadres dispares. Se normalizaron a
1200x900 (4:3) con fondo blanco y un realce suave de contraste, y se generaron recortes
panorámicos de 2000x1000 para el banner. El póster del Bioplasm 10D se muestra recortado
en la tarjeta y completo dentro de su ficha.

Para regenerarlas tras reemplazar una foto, use `assets/img/` como destino y mantenga
las proporciones indicadas.

## Contacto configurado

| Dato | Valor |
|---|---|
| Teléfono / WhatsApp | +57 311 689 1425 |
| Correo | drchristianpedraza@gmail.com |

Para cambiarlos, busque `573116891425` y `drchristianpedraza@gmail.com` en
`index.html` y el número en `script.js` (constante `WHATSAPP`).

## Ver en local

```bash
python -m http.server 8080   # o: npx serve .
```

Luego abra <http://localhost:8080>.

## Publicar

**GitHub Pages** — Settings → Pages → Source: `main` / carpeta raíz.

**Netlify o Cloudflare Pages** — conecte el repositorio; sin comando de build,
directorio de publicación: la raíz.

Para usar el dominio `giimedicas.com`, agregue el registro DNS que indique el
proveedor y cree un archivo `CNAME` con el dominio si publica en GitHub Pages.

## Aviso

Los equipos corresponden a medicina alternativa y complementaria. El contenido del
sitio es de carácter comercial y no constituye consejo médico ni sustituye el
diagnóstico o tratamiento profesional.
