const editor = document.getElementById('textEditor');
const editorIcon = document.getElementById('editorIcon');
const windowEl = document.getElementById('editorWindow');
const icon = document.getElementById('editorIcon');
const closeBtn = document.getElementById('closeEditor');
const desktop = document.getElementById('desktop');
const changeBg = document.getElementById('changeBg');

let bgIndex = parseInt(desktop.dataset.bgIndex) || 0;
const backgrounds = [
  'https://wallpapercave.com/wp/wp12965676.jpg',
  'https://wallpapercave.com/wp/wp14516785.jpg',
  'https://wallpapercave.com/wp/wp15359651.jpg'
];

// Aplica o fundo inicial vindo do backend
desktop.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;

// --- Abrir editor ao dar duplo clique no ícone ---
icon.addEventListener('dblclick', () => {
  windowEl.style.display = 'flex';
});

// --- Fechar editor ---
closeBtn.addEventListener('click', () => {
  windowEl.style.display = 'none';
});

// --- Salvar texto no backend com debounce ---
let timeoutText;
editor.addEventListener('input', () => {
  clearTimeout(timeoutText);
  timeoutText = setTimeout(() => {
    fetch('/salvar-texto', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ texto: editor.value })
    });
  }, 500);
});

// --- Arrastar janela do editor ---
const titleBar = windowEl.querySelector('.title-bar');
let isDraggingWindow = false, offsetX, offsetY;

titleBar.addEventListener('mousedown', e => {
  isDraggingWindow = true;
  offsetX = e.clientX - windowEl.offsetLeft;
  offsetY = e.clientY - windowEl.offsetTop;
});
document.addEventListener('mouseup', () => isDraggingWindow = false);
document.addEventListener('mousemove', e => {
  if (isDraggingWindow) {
    windowEl.style.left = `${e.clientX - offsetX}px`;
    windowEl.style.top = `${e.clientY - offsetY}px`;
  }
});

// --- Trocar fundo da área de trabalho e salvar localmente (pode criar endpoint para salvar no backend) ---
changeBg.addEventListener('click', () => {
  bgIndex = (bgIndex + 1) % backgrounds.length;
  desktop.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
  // Aqui você pode adicionar uma requisição para salvar bgIndex no backend se quiser
});

// --- Arrastar ícone e salvar posição no backend ---
let isDraggingIcon = false, iconOffsetX, iconOffsetY;

editorIcon.addEventListener('mousedown', e => {
  isDraggingIcon = true;
  iconOffsetX = e.clientX - editorIcon.offsetLeft;
  iconOffsetY = e.clientY - editorIcon.offsetTop;
});

document.addEventListener('mouseup', () => {
  if (isDraggingIcon) {
    fetch('/salvar-posicao', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        x: editorIcon.style.left,
        y: editorIcon.style.top
      })
    });
  }
  isDraggingIcon = false;
});

document.addEventListener('mousemove', e => {
  if (isDraggingIcon) {
    editorIcon.style.left = `${e.clientX - iconOffsetX}px`;
    editorIcon.style.top = `${e.clientY - iconOffsetY}px`;
  }
});
