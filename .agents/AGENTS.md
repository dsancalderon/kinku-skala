# Kinku-Skala Workspace Rules

Whenever editing code or assets in this project, you must adhere to the following rules:

1. **HTML Scoping:**
   - All visual elements must reside inside `<div id="skala-landing-wrapper">` in `index.html`.
   - Never add top-level HTML layout tags outside this wrapper unless editing document metadata in `<head>`.

2. **CSS Scoping:**
   - All styles in `style.css` must be nested inside the `#skala-landing-wrapper` rule.
   - Do not use global rules like `body`, `h1`, `a`, or `button` without scoping.
   - Set variables (`--primary-violet`, etc.) scoped inside `#skala-landing-wrapper`.
   - Keep the Elementor/WordPress CSS overrides shield at the top of the wrapper:
     ```css
     #skala-landing-wrapper * {
       box-sizing: border-box !important;
     }
     ```

3. **JS Scoping:**
   - All DOM queries in scripts must be scoped within `document.getElementById('skala-landing-wrapper')` to avoid selector collision on Kinku's WordPress host page.
