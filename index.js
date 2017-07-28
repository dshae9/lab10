var app = angular.module('myModule', []);
app.controller('myController', function($scope){
$scope.toDoList = ['laundry', 'grocery shop', 'clean bathroom', 'wash hair'];

$scope.submit = function() {
$scope.toDoList.push($scope.newItem);
$scope.newItem = "";
}

});
