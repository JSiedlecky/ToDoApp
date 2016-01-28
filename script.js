angular.module('ToDoApp',[])
.controller('ToDoAppCtrl', function($scope){
    var tasks = [
        {'id': 0, 'name':'Umyć zęby', 'task': 'serio, umyj je','status': 'false', 'addedOn':'28.01.2016', 'deadline':'28.01.2016'},
        {'id': 1, 'name':'Zrobić zakupy', 'task': 'Lista: jajka, mydło, maslo, szczotka do kibla, papier toaletowy, kiełasa', 'status': 'true', 'addedOn':'28.01.2016', 'deadline':'30.01.2016'},
        {'id': 2, 'name':'Projekt Albatros', 'task': 'Zleceniodawca: Pan Janusz, Cel: Strona dla firmy Albatros', 'status': 'false', 'addedOn':'28.01.2016', 'deadline':'29.05.2016'},
        {'id': 3, 'name':'Podziękować Markowi', 'task': 'Za bycie kómplem', 'status': 'false', 'addedOn':'28.01.2016', 'deadline':'28.05.2016'},
        {'id': 4, 'name':'WELL FUCK', 'task': 'FUCK WELL', 'status': 'true', 'addedOn':'28.01.2016', 'deadline':'18.04.2016'}
    ];
    
    $scope.hideArrow = function(hideP){
        if(hideP === true){
            $scope.arrow = "glyphicon glyphicon-circle-arrow-down";
        } else if(hideP === false){
            $scope.arrow = "glyphicon glyphicon-circle-arrow-up";
        }
    };
    
    $scope.addTask = function(){
        var tasksArrLen = $scope.tasks.length;
        var currentId = ($scope.tasks[tasksArrLen-1].id)+1;
        var currentName = $scope.nameOfTask;
        var currentTask = $scope.contentOfTask;
        var currentDl = $scope.dlOfTask;
        
    };
    
    $scope.tasks = tasks;
    $scope.arrow = "glyphicon glyphicon-circle-arrow-down";
});