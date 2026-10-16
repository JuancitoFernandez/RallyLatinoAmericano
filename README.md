# Panel Stream Deck - Servicios de Emergencia

Página web minimalista con diseño inspirado en las teclas táctiles físicas de un **Stream Deck** (como en la imagen de referencia), con 3 botones interactivos para servicios de emergencia: **Bomberos**, **Hospital** y **Policía**.

Todo el código, variables y comentarios están escritos en **español**.

---

## 🎨 Características del Diseño

- **Estilo Stream Deck**: Botones con marco exterior oscuro redondeado, pantalla LCD interior en degradado azul y efecto de pulsación táctil con micro-animaciones.
- **Logos Vectoriales (SVG)**:
  - 🚒 **Bomberos**: Icono de flama / rescate contra incendios.
  - 🏥 **Hospital**: Cruz médica de urgencias sanitarias.
  - 🚓 **Policía**: Placa / escudo de seguridad con estrella.
- **Respuesta Táctil y Sonora**: Indicador de servicio en tiempo real y sonido sutil de pulsación física al hacer clic.

---

## 📁 Archivos del Proyecto

- **`index.html`**: Estructura de la consola Stream Deck y los 3 botones con sus respectivos logos vectoriales.
- **`estilos.css`**: Estilos CSS basados en el diseño de la imagen (fondo pastel macOS, dock blanco flotante y teclas con bisel).
- **`app.js`**: Lógica interactiva en JavaScript con todas las variables y funciones nombradas en español.

---

## 🚀 Cómo Iniciar el Servidor Local (`localhost`)

Puedes usar cualquiera de estos comandos en tu terminal dentro de esta carpeta:

### Opción 1: Con Node.js / npx (Recomendado)

```bash
npx serve .
```
- Abre en tu navegador la dirección indicada (usualmente **`http://localhost:3000`**).
- Para detener el servidor: presiona `Ctrl + C`.

---

### Opción 2: Con Python

```bash
py -m http.server 8000
```
- Abre en tu navegador: **`http://localhost:8000`**
- Para detener el servidor: presiona `Ctrl + C`.

---

### Opción 3: Abrir directamente sin servidor

Simplemente haz doble clic en el archivo **`index.html`** desde tu explorador de archivos para abrirlo en cualquier navegador web.
