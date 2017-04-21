(function () {
    'use strict';

    angular
        .module('xomPlayBookApp')
        .config(function ($routeProvider) {
            $routeProvider

                // route for the home page
                .when('/', {
                    templateUrl: 'app/layout/home.html',
                    controller: 'fixEverything'
                })

                // route for the assessment
                .when('/assess', {
                    templateUrl: 'app/assessment/devops.assessment.html',
                    controller: 'mainController',
                    // css files can be declared for each route
                    css: 'app/questions/questions.css'
                })

                 // route for the steps
                .when('/steps', {
                    templateUrl: 'app/assessment/steps.html',
                    controller: 'stepController',
                    // css files can be declared for each route
                    css: 'app/questions/questions.css'
                })

                // route for the about page
                .when('/about', {
                    templateUrl: 'app/layout/about.html',
                    controller: 'aboutController'
                })

                // route for the contact page
                .when('/contact', {
                    templateUrl: 'app/layout/contact.html',
                    controller: 'contactController'
                });
        })
        .controller('mainController', function ($scope, $http) {
            // create a message to display in our view
            $scope.categories = ['Continuous Integration', 'Automated Testing', 'IaC', 'Continuous Delivery', 'Continuous Deployment', 'Continuous Monitoring', ];
            $scope.message = 'Everyone come and see how good I look!';
            $scope.subsection = 0;
            $scope.active = 0;
            $scope.navigate = (function () {
                alert($scope.assessment[$scope.active].length);
                if ($scope.subsection < 4) {
                    $scope.subsection = $scope.subsection + 3;
                } else {
                    $scope.active = $scope.active + 1;
                    $scope.subsection = 0;
                }


            });

            $http.get('http://localhost:52548/data/assessment.json')
                 .then(function (res) {
                     $scope.assessment = res.data;
                 });
        })
        .controller('fixEverything', function ($scope, $route) {
            // create a message to display in our view
            $scope.message = 'Everyone come and see how good I look!';
            $scope.$on('$routeChangeSuccess', function () {
                fixStuff();
            });
        })
        .controller('aboutController', function ($scope) {
            $scope.message = 'Look! I am an about page.';
        })
        .controller('contactController', function ($scope) {
            $scope.message = 'Contact us! JK. This is just a demo.';
        })
        .filter('slice', function () {
            return function (arr, start, end) {
                return (arr || []).slice(start, end);
            };
        });
        
        

})();



function fixStuff () {
    var script = document.createElement('script');
    script.src = "components/exxon/em-unity-1.1.1.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function createChart() {

    //radar chart data
    var radarData = {
        labels: ["CI", "Automated Testing", "IaC", "Continuous Delivery", "Continuous Deployment", "Continuous Monitoring"],
        datasets: [
            {
                label: "ChemApps 11-01-2016",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 10, 0, 81, 35, 5]
            },
            {
                label: "ChemApps 3-01-2017",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [75, 35, 0, 19, 45, 5]
            }
        ]
    }

    //Create Radar chart
    var ctx2 = document.getElementById("radarChart").getContext('2d');
    var myRadarChart = new Chart(ctx2, {
        type: 'radar',
        data: radarData,
        options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });

}