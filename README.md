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
assets/img/banner/         Fotos completas del banner y sus fondos desenfocados
assets/video/              Video de demostración y su imagen de portada
robots.txt · sitemap.xml   SEO básico
_headers                   Cabeceras de seguridad y caché (Netlify / Cloudflare Pages)
```

## Características

- **Sin dependencias ni build.** HTML, CSS y JavaScript puro. Se publica tal cual.
- **Responsive** desde 320 px hasta escritorio.
- **Banner animado** en la portada: 2 láminas con rotación automática cada 6,5 s,
  flechas, puntos, deslizamiento táctil y flechas del teclado. Se pausa al pasar el
  cursor, al enfocar con teclado y con la pestaña en segundo plano.
- **Video de demostración** con imagen de portada y `preload="none"`: el archivo solo
  se descarga cuando el visitante pulsa reproducir.
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

Las fotografías originales tenían tamaños y encuadres dispares. Para el catálogo se
normalizaron a 1200x900 (4:3) con fondo blanco y un realce suave de contraste. El póster
del Bioplasm 10D se muestra recortado en la tarjeta y completo dentro de su ficha.

En el banner las fotos **no se recortan**: se muestran enteras dentro de su columna, y el
fondo se cubre con la misma imagen desenfocada y oscurecida (`fondo-*.jpg`). Así el
equipo se ve completo en cualquier tamaño de pantalla, incluido el móvil, donde la foto
pasa debajo del texto.

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
