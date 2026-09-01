# GII Médicas — Sitio web

Sitio web estático de **GII Médicas**, mayorista en equipos médicos alternativos.
Reemplaza el sitio anterior de `giimedicas.com` conservando su estructura
(Inicio, Quiénes somos, Productos, Términos y condiciones, Contáctenos) con un
diseño actual, responsive y optimizado para conversión por WhatsApp.

## Contenido

```
index.html                 Página única con todas las secciones
styles.css                 Hoja de estilos (variables CSS, sin dependencias)
script.js                  Menú móvil, filtros de catálogo, animaciones, formulario
assets/favicon.svg         Ícono del sitio
assets/img/                Fotografías de los equipos
robots.txt · sitemap.xml   SEO básico
_headers                   Cabeceras de seguridad y caché (Netlify / Cloudflare Pages)
```

## Características

- **Sin dependencias ni build.** HTML, CSS y JavaScript puro. Se publica tal cual.
- **Responsive** desde 320 px hasta escritorio.
- **Catálogo filtrable** por categoría (NLS, biorresonancia, diagnóstico, terapia).
- **Formulario que abre WhatsApp** con el mensaje ya redactado — no requiere backend.
- **SEO:** metadatos Open Graph, datos estructurados `schema.org/Organization`,
  `sitemap.xml` y `robots.txt`.
- **Accesibilidad:** navegación por teclado, `aria-*` en el menú y los filtros,
  textos alternativos descriptivos y soporte de `prefers-reduced-motion`.

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
