angular.module('EditCtrl', []).controller('EditController', function($scope, $http, $location, $routeParams) {
    $scope.title = "Edit Contact";

    var id = $routeParams.id;
    $http.get('/api/' + id).success(function(data) {
        $scope.contact = data;
    });

    $scope.cancel = function() {
        $location.path('/view/' + id);
    };

    $scope.update = function() {
        $http.put('/api/' + $scope.contact._id, $scope.contact).success(function(data) {
            $scope.contact = data;
            $location.path('/list');
            toastr.success('Contact updated successfully!');
        });
    };

    $scope.noSpace = function() {
        $scope.contact.fname = $scope.contact.fname.split(' ').join('');
        $scope.contact.lname = $scope.contact.lname.split(' ').join('');
    };

});