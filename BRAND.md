# SKALA — Guía de Marca (contexto para desarrollo)

> Este documento resume el Manual de Marca SKALA (2026) para que el equipo de desarrollo tenga a mano los lineamientos de identidad visual al construir el sitio web del proyecto.

## 1. Sobre la marca

**SKALA** es un proyecto residencial ubicado en **Villavicencio** (Meta, Colombia) que eleva la experiencia de vivir en el llano, integrando arquitectura contemporánea, diseño funcional y una conexión auténtica con el entorno natural.

**Visión de marca:**
> "Avanzar paso a paso hacia proyectos sólidos, sostenibles y pensados para el crecimiento de las personas y las ciudades."

**Propuesta de valor:** espacios pensados para el bienestar, en una ubicación estratégica de Villavicencio donde la ciudad y el paisaje se encuentran.

## 2. Concepto del logotipo

- La tipografía del logotipo fue intervenida (ajuste de curvas y esquinas) para alinearse con el lenguaje arquitectónico del proyecto: formas fluidas, rectas y equilibradas.
- El isotipo es un contenedor geométrico que evoca **una puerta**, en alusión a Villavicencio como "puerta al llano".
- La **"K"** representa la vía al llano: dirección, acceso y recorrido, como concepto de conexión con el territorio.
- La construcción de la "K" mantiene relación formal con la marca **KINKU** (marca matriz/relacionada — sitio: www.kinku.co), generando coherencia visual entre ambas.
- El logotipo se compone de: **Logotipo** (forma gráfica del nombre "SKALA") + **Isotipo** (la "K" intervenida, usada sola en aplicaciones que requieren una solución más sintética).

## 3. Paleta de colores corporativos

| Nombre | HEX | RGB | CMYK | Significado |
|---|---|---|---|---|
| **Velvet Violet** (color principal) | `#61196F` | 97, 25, 111 | 13, 78, 0, 57 | Inspirado en la Serranía de la Macarena. Sofisticación, identidad, profundidad. |
| **Palace Orange** | `#E99E1E` | 233, 158, 30 | 0, 32, 87, 9 | Atardeceres de Villavicencio. Energía, cercanía, bienestar, calidez del hogar. |
| **Brunswick Green** | `#1F4D3A` | 31, 77, 58 | 60, 0, 25, 70 | Biodiversidad y naturaleza del Meta. Equilibrio, frescura, sostenibilidad. |

**Colores de moodboard (referencia, no todos son corporativos oficiales):**
- Sienna `#85250f`
- Gamboge `#E99E1C`
- Apricot `#FDCB84`
- Sky Magenta `#BF6BA1`
- Eminence `#61196E`

> Nota: los tres colores corporativos principales (Velvet Violet, Palace Orange, Brunswick Green) son los usados de forma consistente en aplicaciones reales (papelería, banderas, merchandising), y deberían ser los tokens base para el sitio web (ej. `--color-primary`, `--color-secondary`, `--color-accent`).

## 4. Tipografía corporativa

- **Urbanist** — tipografía principal
- **Futura** — tipografía secundaria

(Ambas incluyen mayúsculas, minúsculas y numerales completos según el manual; usar Urbanist como principal para UI/web si Futura no está disponible como web font).

## 5. Uso correcto del logotipo

- Debe respetarse un **área de seguridad** alrededor del logotipo, libre de elementos gráficos que interfieran en su lectura.
- **Reducción mínima:** impresión 2 cm / pantalla 93px / favicon 30px — por debajo de esto no se garantiza legibilidad.
- Sobre fondos no corporativos o fotografías: usar versión en **blanco o negro** según la luminosidad del fondo.
- El logo puede aplicarse sobre los 3 colores corporativos (fondo de color), garantizando contraste y legibilidad.

### Aplicaciones incorrectas (evitar siempre)
- Estirar o ensanchar el logotipo
- Rotarlo
- Desordenar sus elementos
- Cambiar los colores oficiales
- Alterar la tipografía

## 6. Aplicaciones de referencia (moodboard visual)
El manual muestra el sistema aplicado en: papelería (tarjetas, sobres, carpetas), merchandising (hoodies con isotipo bordado), banderas publicitarias y piezas fotográficas del llano (vía al llano, Serranía de la Macarena, arco de Villavicencio como "puerta al llano").

## 7. Recomendaciones para el sitio web

- **Colores base (CSS custom properties sugeridas):**
  ```css
  :root {
    --skala-violet: #61196F;   /* primario / marca */
    --skala-orange: #E99E1E;   /* acento / CTA */
    --skala-green: #1F4D3A;    /* secundario / footer, secciones naturaleza */
    --skala-white: #FFFFFF;
    --skala-black: #000000;
  }
  ```
- **Tipografía:** Urbanist como font-family principal (Google Fonts la incluye), Futura como alternativa para titulares si se dispone de licencia.
- **Logo:** usar SVG del isotipo (la "K") para favicon y versiones compactas (nav en mobile, loading states); usar el logotipo completo "SKALA" en el header/footer principal.
- **Fondos:** los tres colores corporativos pueden usarse como fondo de secciones alternas (hero en violeta, sección de amenities en verde, CTA en naranja), siempre con el logo en blanco sobre ellos.
- **Tono de contenido:** cálido, cercano, conectado con el territorio llanero (Villavicencio, el llano, la naturaleza) — sostenible, moderno pero arraigado en lo local.
- **Marca relacionada:** KINKU (www.kinku.co) — si el sitio requiere cross-linking o co-branding, mantener coherencia visual con la "K" compartida.

---
*Fuente: Manual de Marca SKALA, 2026.*
