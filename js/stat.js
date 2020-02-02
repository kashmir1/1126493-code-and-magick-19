'use strict';

var SHADOW_WIDTH = 420;
var SHADOW_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_HEIGTH = 150;
var BAR_NAME_HEIGTH = 270;
var BAR_Y = 100;
var BAR_X = 120;
var BAR_GAP = 50; /* Отступ */


var renderCloudShadow = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, SHADOW_WIDTH, SHADOW_HEIGHT);
};

var renderCloud = function (ctx, stroke, x, y, color) {
  ctx.beginPath();
  ctx.strokeStyle = stroke;
  ctx.moveTo(x, y);
};

var renderLine = function (ctx, x, y) {
  ctx.lineTo(x, y);
};

var lineClose = function (ctx, color) {
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
};

var cloudText = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillText('Список результатов: ', 120, 70);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloudShadow(ctx, 110, 20, 'rgba(19,9,51,0.7)');
  renderCloud(ctx, '#130933', 100, 10, '#fff');
  renderLine(ctx, 310, 20);
  renderLine(ctx, 520, 10);
  renderLine(ctx, 520, 280);
  renderLine(ctx, 100, 280);
  renderLine(ctx, 100, 10);
  lineClose(ctx, '#fff');
  cloudText(ctx);

  /* Массив names уже есть в game.js */

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_NAME_HEIGTH); /* Имена */
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, BAR_HEIGTH); /* Столбцы */
  }

  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * playerIndex, BAR_Y, BAR_WIDTH, BAR_HEIGTH);
  //
  // var playerIndex = 1;
  //
  // ctx.fillStyle = 'hsla(241, 34%, 15%, 1)';
  // ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * playerIndex, BAR_Y, BAR_WIDTH, BAR_HEIGTH);
  //
  // var playerIndex = 2;
  //
  // ctx.fillStyle = 'hsla(241, 22%, 15%, 1)';
  // ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * playerIndex, BAR_Y, BAR_WIDTH, BAR_HEIGTH);
  //
  // var playerIndex = 3;
  //
  // ctx.fillStyle = 'hsla(241, 22%, 7%, 1)';
  // ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * playerIndex, BAR_Y, BAR_WIDTH, BAR_HEIGTH);
};

