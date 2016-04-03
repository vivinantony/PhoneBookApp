angular.module('ViewCtrl', []).controller('ViewController', function($scope, $http, $location, $routeParams) {
    $scope.title = "View Contact";

    var id = $routeParams.id;
    $http.get('/api/' + id).success(function(data) {
        $scope.contact = data;
    });

    $scope.delete = function() {
        $http.delete('/api/' + id).success(function(data){
            $scope.contact = data;
            $location.path('/list');
            toastr.success('Contact deleted successfully!');
        });

        $('.modal-backdrop').hide();
    };

    $scope.edit = function() {
        $location.path('/edit/' + id);
    }
});