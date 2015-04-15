var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

  $scope.getQuotes = function() {
    $scope.quotes = dataService.getData();
  };

  $scope.getQuotes();


  $scope.addQuote = function() {
    var textObj = $scope.textEntry;
    dataService.addData(textObj);
    $scope.textEntry = '';
  };

  $scope.removeQuote = function(data) {
    dataService.removeData(data);
    $scope.removeTextEntry = '';
  };


});