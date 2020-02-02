'use strict';

var SHADOW_WIDTH = 420;
var SHADOW_HEIGHT = 270;

var renderCloudShadow = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, SHADOW_WIDTH, SHADOW_HEIGHT);
};

var renderCloud = function(ctx, stroke, x, y, color) {
  ctx.beginPath();
  ctx.strokeStyle = stroke;
  ctx.moveTo(x, y);
  ctx.lineTo(310, 20);
  ctx.lineTo(520, 10);
  ctx.lineTo(520, 280);
  ctx.lineTo(100, 280);
  ctx.lineTo(100, 10);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillText('Список результатов: ', 120, 70);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloudShadow(ctx, 110, 20, 'rgba(19,9,51,0.7)');
  renderCloud(ctx, '#130933', 100, 10, '#fff');
};
