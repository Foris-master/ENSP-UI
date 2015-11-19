var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    TITLE: 'Hello',
    WELCOME_MESSAGE1: 'My name is {{name}}',
    WELCOME_MESSAGE2: 'And my name is {{name}}. I\'m {{age}} years old',
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_FR: 'french'
  });
  $translateProvider.translations('fr', {
    TITLE: 'Bonjour.',
    WELCOME_MESSAGE1: 'Mon nom est {{name}}',
    WELCOME_MESSAGE2: 'Et mon nom est {{name}}. J\'ai {{age}} ans',
    BUTTON_LANG_EN: 'anglais',
    BUTTON_LANG_FR: 'français'
  });
  $translateProvider.preferredLanguage('en');
});

app.controller('MainCtrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };

  $scope.userData = {
  	name: 'Xavier',
  	age: 25
  }
});