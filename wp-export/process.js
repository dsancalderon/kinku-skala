const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const postcss = require('postcss');
const prefixer = require('postcss-prefix-selector');

const htmlPath = path.join(__dirname, '../index.html');
const cssPath = path.join(__dirname, '../style.css');

const outHtmlPath = path.join(__dirname, 'skala-contenido.html');
const outCssPath = path.join(__dirname, 'skala-estilos.css');

// 1. Process HTML
const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const $ = cheerio.load(htmlContent, { decodeEntities: false });

// Remove header and footer
$('header').remove();
$('footer').remove();

// Get the body contents
const bodyHtml = $('body').html();

// Wrap in the scoped wrapper
const finalHtml = `<div id="skala-landing-wrapper">\n${bodyHtml}\n</div>`;

fs.writeFileSync(outHtmlPath, finalHtml, 'utf8');
console.log('Processed HTML saved to', outHtmlPath);

// 2. Process CSS
const cssContent = fs.readFileSync(cssPath, 'utf8');

const prefixPlugin = prefixer({
  prefix: '#skala-landing-wrapper',
  transform: function (prefix, selector, prefixedSelector, filePath, rule) {
    // Prevent double-prefixing if already scoped
    if (selector.includes('#skala-landing-wrapper')) {
      return selector;
    }
    // Replace global root selectors with the wrapper itself
    if (selector === 'body' || selector === 'html' || selector === ':root') {
      return prefix;
    }
    // Handle font-face, keyframes, etc. which shouldn't be prefixed directly
    if (rule.parent && (rule.parent.name === 'keyframes' || rule.parent.name === '-webkit-keyframes')) {
      return selector;
    }
    return prefixedSelector;
  }
});

postcss([prefixPlugin])
  .process(cssContent, { from: cssPath, to: outCssPath })
  .then(result => {
    fs.writeFileSync(outCssPath, result.css, 'utf8');
    console.log('Processed CSS saved to', outCssPath);
  })
  .catch(err => {
    console.error('Error processing CSS:', err);
  });
