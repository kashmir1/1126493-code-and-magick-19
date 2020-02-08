'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

var TEXT = '16px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = TEXT;
  ctx.fillText(text, x, y);
};

var renderBar = function (ctx, gapX, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(gapX, CLOUD_HEIGHT - height - GAP * 2, width, height);
};

var renderUsersBars = function (ctx, gapX, width, textColor, names, times) {
  var margin = CLOUD_X + gapX;

  // макс элемент массива
  var maxTime = Math.max.apply(null, times);

  for (var i = 0; i < names.length; i++) {
    var height = Math.round(times[i] * BAR_HEIGHT / maxTime);
    var color;

    if (names[i] === 'Вы') {
      color = 'hsl(0, 100%, 50%)';
    } else {
      color = 'hsl(234, 96%,' + (Math.floor(Math.random() * (100 - 1 + 1)) + 1) + '%)';
    }

    renderText(ctx, names[i], margin, CLOUD_HEIGHT, textColor);
    renderBar(ctx, margin, width, height, color);

    // расположение времени
    renderText(ctx, Math.round(times[i]), margin, CLOUD_HEIGHT - height - GAP * 3, textColor);

    margin += width + gapX;
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, 'Ура вы победили!', 120, 45, 'black');
  renderText(ctx, 'Список результатов: ', 120, 65, 'black');

  renderUsersBars(ctx, BAR_GAP, BAR_WIDTH, 'black', names, times);
};
