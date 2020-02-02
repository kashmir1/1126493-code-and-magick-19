'use strict';

window.renderStatistics = function (ctx) {
  ctx.fillStyle = 'rgba(19,9,51,0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.beginPath();
  ctx.strokeStyle = '#130933';
  ctx.moveTo(100, 10);
  ctx.lineTo(310, 20);
  ctx.lineTo(520, 10);
  ctx.lineTo(520, 280);
  ctx.lineTo(100, 280);
  ctx.lineTo(100, 10);
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
};
