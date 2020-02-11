'use strict';

// Находим и покажем окно настроек пользователя.
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Находим и покажем окно выбора персонажей.
document.querySelector('.setup-similar').classList.remove('hidden');

//Находим блок списка похожих персонажей
var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var WIZARD_QUANTITY = 4;

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

// Получаем случайный индекс массива
var arrayRandElement = function (arr) {
  return Math.floor(Math.random() * arr.length);
};


var wizards = [];

//Создаем фукнцию записи объектов в массив
var createWizard = function (wizards) {
  for (var i = 0; i < WIZARD_QUANTITY; i++) {
    var wizard = {
      name: wizardNames[arrayRandElement(wizardNames)] + ' ' + wizardSurnames[arrayRandElement(wizardSurnames)],
      coat: coatColors[arrayRandElement(eyesColors)],
      eyes: eyesColors[arrayRandElement(eyesColors)]
    };

    wizards.push(wizard);
  }
};

createWizard(wizards);

//выводим персонажей


var fragment = document.createDocumentFragment();

var renderWizard = function (wizards) {
  for (var i = 0; i < WIZARD_QUANTITY; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    //Задаем вывод характеристик из массивов
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyes;
    fragment.appendChild(wizardElement);
  }
};

renderWizard(wizards);
similarListElement.appendChild(fragment);
