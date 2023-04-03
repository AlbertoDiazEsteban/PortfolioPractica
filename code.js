  const canvas = document.getElementById('lienzo');
  const ctx = canvas.getContext('2d');

  canvas.width = document.body.offsetWidth;
  canvas.height = document.body.offsetHeight;

  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = '#11101b';
  ctx.fillRect(0, 0, w, h);

  

  function matrix() {
    ctx.fillStyle = 'hsla(245, 26%, 8%, 0.192)';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = 'aqua';
    ctx.font = '15pt monospace';
    console.log("Array posicion: " + posicion_y)

    posicion_y.forEach((y, ind) => {
      const text = ['0', '1'][Math.floor(Math.random() * 2)];
      const x = ind * 20;
      ctx.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) {
        posicion_y[ind] = 0;
      } else {
        posicion_y[ind] = y + 20;
      }
    });
  }

  const cols = Math.floor(w / 20) + 1;
  const posicion_y = Array(cols).fill(0);

  setInterval(matrix, 150);


