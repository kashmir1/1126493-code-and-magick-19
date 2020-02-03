'use strict';

var SHADOW_WIDTH = 420;
var SHADOW_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_HEIGTH = 150;
var BAR_NAME_HEIGTH = 270;
var BAR_TIME_HEIGTH = 90;
var BAR_Y = 250;
var BAR_X = 120;
var BAR_GAP = 50; /* Отступ */


/* Тень */
var renderCloudShadow = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, SHADOW_WIDTH, SHADOW_HEIGHT);
};

/* Облако */
var renderCloud = function (ctx, stroke, x, y) {
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
/* Облако */

/* Текст облака*/
var cloudText = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);
};

/* Ищем максимальный элемент */
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

/* Определяем цвет */
var getBarColor = function (playerName) {
  if (playerName === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  } else {
    return 'rgba(19, 9, 51, ' + (Math.random() + 0.1).toFixed(1) + ')';
  }
};


window.renderStatistics = function (ctx, names, times) {
  /* Рисуем облако */
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
  var maxTime = getMaxElement(times);

  /* Рисуем гистограму */
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_NAME_HEIGTH); /* Имена */
    ctx.fillText(Math.round(times[i]), BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_TIME_HEIGTH);
    ctx.fillStyle = getBarColor(names[i]);
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, (BAR_HEIGTH * times[i]) / maxTime * -1);/* Столбцы */
  }
};

