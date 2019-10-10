export const drawCanvas = (el, { width, height }, tileSize) => {
  if (!el) return;
  console.log('drawing...');
  const ctx = el.getContext('2d');
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = '#ccc';

  const rows = (height / tileSize) | 0;
  const cols = (width / tileSize) | 0;

  // draw columns
  for (let col = 0; col < cols; ++col) {
    ctx.moveTo(col * tileSize, 0);
    ctx.lineTo(col * tileSize, height);
  }

  // draw rows
  for (let row = 0; row < rows; ++row) {
    ctx.moveTo(0, row * tileSize);
    ctx.lineTo(width, row * tileSize);
  }

  ctx.stroke();
};

export const getTilePosition = (mouseX, mouseY, tileSize) => {
  return { x: (mouseX / tileSize) | 0, y: (mouseY / tileSize) | 0 };
};

export const paintTile = (ctx, mouseX, mouseY, tileSize, color) => {
  const tile = getTilePosition(mouseX, mouseY, tileSize);
  ctx.fillStyle = color;
  ctx.fillRect(tile.x * tileSize, tile.y * tileSize, tileSize, tileSize);
};

export const normalizeMousePosition = (canvas, clientX, clientY) => {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / canvasRect.width;
  const scaleY = canvas.height / canvasRect.height;

  return {
    x: ((clientX - canvasRect.left) * scaleX) | 0,
    y: ((clientY - canvasRect.top) * scaleY) | 0,
  };
};
