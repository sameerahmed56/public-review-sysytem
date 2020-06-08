var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('dashboardmessage', {
            // url: '/dashboard/:e/:f',
            url:'/',
            templateUrl: "dashboard.html",
            controller: 'thirdController'
        })
        .state('profilemessage', {
            url: '/profile/:a/:b',
            templateUrl: 'profile.html',
            controller: 'firstController'

        })
        .state('reviewmessage', {
            url: '/review/:c/:d',
            templateUrl: 'review.html',
            controller: 'secondController'

        })
        .state('topprojectsmessage', {
            url: '/topprojects/:g/:h',
            templateUrl: 'topprojects.html',
            controller: 'fourthController'

        })
        // .state('root', {
        //     url: '/',
        //     template: "YOU ARE AT ROOT"
        // })

    $urlRouterProvider.otherwise('/');

});

myApp.controller('firstController', function ($scope, $stateParams) {
    $scope.a = $stateParams.a,
        $scope.b = $stateParams.b
})

myApp.controller('secondController', function ($scope, $stateParams) {
    $scope.c = $stateParams.c,
    $scope.d = $stateParams.d,
    $scope.rate ='';

})
myApp.controller('thirdController', function ($scope, $stateParams) {
    $scope.e = $stateParams.e,
        $scope.f = $stateParams.f
})
myApp.controller('fourthController', function ($scope, $stateParams) {
    $scope.g = $stateParams.g,
        $scope.h = $stateParams.h
})
function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
  }

function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
  }
//   ----
$(document).ready(function () {
    $(".gear-btn").click(function () {
        $(".logout-panel").fadeToggle("slow");
    });
});
// ------
function logOut(){
    window.location = "LoginPRS.html";
}
// -------
function displayProfile() {
    fetch("http://jsonplaceholder.typicode.com/users/2")
        .then(function (response) {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error('Invalid user ID');
            }
        })
        .then((data) => {
            document.getElementById('nameOut').innerHTML = data.name;
            document.getElementById('emailOut').innerHTML = data.email;
            document.getElementById('phoneOut').innerHTML = data.phone;
            var addressData = data.address.suite + ", " + data.address.street + ", " + data.address.city;
            document.getElementById('addressOut').innerHTML = addressData;
            document.getElementById('zipcodeOut').innerHTML = data.address.zipcode;
            document.getElementById('websiteOut').innerHTML = data.website;
        })
        .catch((err) => {
            console.log('ERROR: ', err.message);
        });

}

function displayDashboard(){
    fetch("http://jsonplaceholder.typicode.com/users/2")
        .then(function (response) {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error('Invalid user ID');
            }
        })
        .then((data) => {
            document.getElementById('nameOut').innerHTML = data.name;
        })
        .catch((err) => {
            console.log('ERROR: ', err.message);
        });
}
function displayReview() {
    fetch("http://jsonplaceholder.typicode.com/users/2")
        .then(function (response) {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error('Invalid user ID');
            }
        })
        .then((data) => {
            var addressData = data.address.suite + ", " + data.address.street + ", " + data.address.city;
            console.log(addressData);
            document.getElementById('addressOut').innerHTML = addressData;
            document.getElementById('cityOut').innerHTML = data.address.city;
            })
        .catch((err) => {
            console.log('ERROR: ', err.message);
        });
}
