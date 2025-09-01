// Referencias a sliders y campos de número
const rojoRange = document.getElementById('rojoRange');
const verdeRange = document.getElementById('verdeRange');
const azulRange = document.getElementById('azulRange');

const rojoInput = document.getElementById('rojoInput');
const verdeInput = document.getElementById('verdeInput');
const azulInput = document.getElementById('azulInput');

const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');

// Actualiza el cuadro de color y el código hexadecimal
function actualizarColor() {
  const r = clamp(parseInt(rojoRange.value));
  const g = clamp(parseInt(verdeRange.value));
  const b = clamp(parseInt(azulRange.value));

  // Actualizar inputs de número
  rojoInput.value = r;
  verdeInput.value = g;
  azulInput.value = b;

  const colorRGB = `rgb(${r}, ${g}, ${b})`;
  const colorHex = `#${aHex(r)}${aHex(g)}${aHex(b)}`;

  colorBox.style.backgroundColor = colorRGB;
  hexCode.textContent = colorHex;
}

// Convierte a hexadecimal con 2 dígitos
function aHex(valor) {
  return valor.toString(16).padStart(2, '0').toUpperCase();
}

// Limita valor entre 0 y 255
function clamp(valor) {
  return Math.min(255, Math.max(0, isNaN(valor) ? 0 : valor));
}

// Escuchar cambios en sliders
rojoRange.addEventListener('input', () => {
  rojoInput.value = rojoRange.value;
  actualizarColor();
});

verdeRange.addEventListener('input', () => {
  verdeInput.value = verdeRange.value;
  actualizarColor();
});

azulRange.addEventListener('input', () => {
  azulInput.value = azulRange.value;
  actualizarColor();
});

// Escuchar cambios en inputs manuales
rojoInput.addEventListener('input', () => {
  rojoRange.value = clamp(rojoInput.value);
  actualizarColor();
});

verdeInput.addEventListener('input', () => {
  verdeRange.value = clamp(verdeInput.value);
  actualizarColor();
});

azulInput.addEventListener('input', () => {
  azulRange.value = clamp(azulInput.value);
  actualizarColor();
});

// Inicializar
rojoRange.value = 0;
verdeRange.value = 0;
azulRange.value = 0;
actualizarColor();
