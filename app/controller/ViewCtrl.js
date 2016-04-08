angular.module('app').controller('ViewController', function($scope, $http, $location, $routeParams) {
    $scope.title = "View Contact";

    var id = $routeParams.id;
    $http.get('/api/' + id).success(function(data) {
        $scope.contact = data;
    }).error(function(status) {
        console.log('Error: ' + status);
    });

    $scope.delete = function() {
        $http.delete('/api/' + id).success(function(data){
            $scope.contact = data;
            $location.path('/list');
            toastr.success('Contact deleted successfully!');
        }).error(function(status) {
            toastr.warning('Please try again after sometime!');
            console.log('Error: ' + status);
        });

        $('.modal-backdrop').hide();
    };

    $scope.edit = function() {
        $location.path('/edit/' + id);
    }
});