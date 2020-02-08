'use strict';

// Находим и покажем окно настроек пользователя.
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Находим и покажем окно выбора персонажей.
document.querySelector('.setup-similar').classList.remove('hidden');

//Найтед блок списка похожих персонажей
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

//выводим персонажей
for (var i = 0; i < WIZARD_QUANTITY; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  //Задаем вывод характеристик из массивов
  wizardElement.querySelector('.setup-similar-label').textContent = wizardNames[arrayRandElement(wizardNames)]
  + ' ' + wizardSurnames[arrayRandElement(wizardSurnames)];
  wizardElement.querySelector('.wizard-coat').style.fill = coatColors[i];
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColors[i];

  similarListElement.appendChild(wizardElement);
}

// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');
//
// document.querySelector('.setup-similar').classList.remove('hidden');
//
// var similarListElement = userDialog.querySelector('.setup-similar-list');
//
// var similarWizardTemplate = document.querySelector('#similar-wizard-template')
//   .content
//   .querySelector('.setup-similar-item');
//
//


//
// var WIZARD_QUANTITY = 4;
//
//


//
// /* Собираем объект характеристик маг
// *  Задаем функцию
// * Объявляем пустой массив куда запишем магов
// * Создадим цикл
// * Создаем объект куда запишем характеристики магов
// * */
// var createWizard = function (wizard) {
//   var wizards = [];
//   for (var i = 0; i < WIZARD_QUANTITY; i++) {
//     var wizard = {
//       name: wizardNames[arrayRandElement(wizardNames)] + ' ' + wizardSurnames[arrayRandElement(wizardSurnames)],
//       coatColors: coatColors[arrayRandElement(coatColors)],
//       eyeColor: eyesColors[arrayRandElement(eyesColors)]
//     };
//     wizards.push(wizard);
//   }
//   return wizards;
// };
//
// wizards = createWizard(wizard);
//
//


