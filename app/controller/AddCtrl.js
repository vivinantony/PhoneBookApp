angular.module('app').controller('AddController', function($scope, $http, $location) {
    $scope.title = "Add Contact";

    $scope.save = function() {
        $http.post('/api', $scope.contact).success(function(data) {
            $scope.contact = data;
            $location.path('/list');
            toastr.success('Contact added successfully!');
        }).error(function(status) {
            toastr.warning('Wrongly entered. Please check!');
            console.log('Error: ' + status);
        });
    };

    $scope.noSpace = function() {
        $scope.contact.fname = $scope.contact.fname.split(' ').join('');
        $scope.contact.lname = $scope.contact.lname.split(' ').join('');
    };

});