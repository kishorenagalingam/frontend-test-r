var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "news.html"
        })
        .when("/chart", {
            templateUrl: "chart.html"
        })
        .when("/news", {
            templateUrl: "news.html"
        })
        .when("/blue", {
            templateUrl: "blue.html"
        });
});


app.directive('highchart', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        replace: true,

        link: function(scope, element, attrs) {

            scope.$watch(function() { return attrs.chart; }, function() {

                if (!attrs.chart) return;

                var charts = JSON.parse(attrs.chart);

                $(element[0]).highcharts(charts);

            });
        }
    };
});


app.controller('classCtrl', function($scope, $http, $timeout) {

    $scope.menuItems = [{
            "isNavItem": true,
            "href": "#!chart",
            "text": "Analytics",
            "logoLocation": "../assets/analityc.png"
        },
        {
            "isNavItem": true,
            "href": "#!news",
            "text": "News",
            "logoLocation": "../assets/newspaper-o.png"
        },
        {
            "isNavItem": true,
            "href": "#!news",
            "text": "Board Brief",
            "logoLocation": "../assets/board-brief.png"
        },
        {
            "isNavItem": true,
            "href": "#!news",
            "text": "Briefcase",
            "logoLocation": "../assets/briefcase.png"
        }
    ];


    $scope.isActive = true;
    $scope.activeButton = function() {
        $scope.isActive = !$scope.isActive;
    };

    $http.get("activity-data.json").then(function(response) {
        $scope.myData = response.data;
        console.log($scope.myData);
    });


    $http.get("activity-data.json")
        .then(function(response) {
            $scope.myWelcome = response.data;
        });
    /*  var ctx = document.getElementById("myChart");
     var myChart = new Chart(ctx, {
         type: 'line',
         data: {
             labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
             datasets: [{
                 label: '# of Votes',
                 data: [12, 19, 3, 5, 2, 3],
                 backgroundColor: [
                     'rgba(255, 99, 132, 0.2)',
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 206, 86, 0.2)',
                     'rgba(75, 192, 192, 0.2)',
                     'rgba(153, 102, 255, 0.2)',
                     'rgba(255, 159, 64, 0.2)'
                 ],
                 borderColor: [
                     'rgba(255,99,132,1)',
                     'rgba(54, 162, 235, 1)',
                     'rgba(255, 206, 86, 1)',
                     'rgba(75, 192, 192, 1)',
                     'rgba(153, 102, 255, 1)',
                     'rgba(255, 159, 64, 1)'
                 ],
                 borderWidth: 1
             }]
         },
         options: {
             scales: {
                 yAxes: [{
                     ticks: {
                         beginAtZero: true
                     }
                 }]
             }
         }
     }); */



});