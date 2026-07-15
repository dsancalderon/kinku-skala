# Skala - Landing Page (Kinku)

Este proyecto es una Landing Page optimizada para el desarrollo inmobiliario **Skala** en Villavicencio. Está estructurada para integrarse fácilmente dentro del sitio principal de Kinku en WordPress (construido con Elementor) sin generar conflictos de estilos CSS.

---

## 🛠️ Reglas de Desarrollo e Integración

Para mantener la independencia de la Landing Page y evitar que sus estilos rompan la web principal de Kinku (o viceversa), se deben respetar estrictamente las siguientes reglas durante el desarrollo:

### 1. Estructura HTML (Aislamiento de Contenido)
Todo el contenido visual de la página debe estar encapsulado dentro del contenedor principal con el ID `skala-landing-wrapper`.

* **Regla:** Ningún elemento visual (header, footer, secciones, modales o botones flotantes) debe existir fuera de este contenedor en el `body`.
```html
<body>
    <div id="skala-landing-wrapper">
        <!-- Todo el contenido de la landing va aquí -->
    </div>
</body>
```

### 2. Estructura CSS (Nesting y Variables)
Todos los estilos definidos en `style.css` deben estar anidados bajo el selector `#skala-landing-wrapper` utilizando CSS Nesting nativo.

* **Regla:** No declarar estilos en selectores globales como `body`, `h1`, `p`, `a` o `button` de forma directa. Usa el selector relativo `&` para referirte al contenedor general.
* **Regla:** Las variables de colores y fuentes deben declararse a nivel de `#skala-landing-wrapper` para no sobreescribir las variables globales del sitio padre.

```css
#skala-landing-wrapper {
  /* Variables locales */
  --primary-violet: #61196F;
  
  /* Estilos del contenedor general (reemplazo de body) */
  & {
    font-family: var(--font-family);
    background-color: var(--white);
  }

  /* Estilos anidados seguros */
  h2 {
    font-size: 32px;
  }
  
  .card {
    background: #fff;
  }
}
```

### 3. Evitar Conflictos con Elementor (Reset Override)
El sitio principal utiliza WordPress y Elementor, el cual inyecta estilos globales agresivos (por ejemplo, cambia el `box-sizing` de botones a `content-box` o pinta enlaces de color rosa).
* **Regla:** Mantener siempre el bloque de "Shield / Reset overrides" al inicio del wrapper en `style.css` para forzar las propiedades estándar en nuestros componentes:
```css
#skala-landing-wrapper * {
  box-sizing: border-box !important;
}
```

### 4. JavaScript Acotado (Scoped Queries)
Si se programan scripts personalizados, animaciones o controladores de eventos:
* **Regla:** Siempre restringe la búsqueda de elementos al wrapper de Skala para no seleccionar accidentalmente elementos del header o footer de la página principal de Kinku.
```javascript
const landingWrapper = document.getElementById('skala-landing-wrapper');
// Selecciona solo botones de nuestra landing
const ctaButtons = landingWrapper.querySelectorAll('.btn-orange-large'); 
```

---

## 🔌 Integraciones Actuales

* **Formulario (HubSpot):** Conectado directamente a la cuenta oficial de Kinku mediante Embed Script en el div `#hubspot-form-container`.
  * **Portal ID:** `49317434`
  * **Form ID (Pekín/Pruebas):** `c53ad587-9b5b-4b78-901f-63f83f70f852`
  * *Nota:* Si se requiere separar los leads de Skala, se debe cambiar únicamente el `formId` por el nuevo que genere el cliente.
* **Tipografía:** Montserrat (cargada mediante `@import` al inicio de `style.css`).
* **Imágenes de Prueba:** Renderizaciones arquitectónicas realistas ubicadas localmente en la carpeta `images/` (ej. `gen_hero.png`, `gen_building.png`).
