var app = angular.module("myApp", ['ngRoute', 'chart.js', 'tc.chartjs']);
//var chart = angular.module("myApp", ['highcharts-ng']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "chart.html"
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

app.controller('classCtrl', function($scope, $http, $timeout) {
    $scope.menuItems = [{
            "href": "#!chart",
            "text": "Analytics",
            "logoLocation": "../assets/analityc.png"
        },
        {
            "href": "#!news",
            "text": "News",
            "logoLocation": "../assets/newspaper-o.png"
        },
        {
            "href": "#!news",
            "text": "Board Brief",
            "logoLocation": "../assets/board-brief.png"
        },
        {
            "href": "#!news",
            "text": "Briefcase",
            "logoLocation": "../assets/briefcase.png"
        }
    ];


    // current menu active class

    $scope.activeMenu = $scope.menuItems[0];
    $scope.setActive = function(menuItem) {
        $scope.activeMenu = menuItem;
    };

    // side bar collapse
    $scope.isActive = true;
    $scope.activeButton = function() {
        $scope.isActive = !$scope.isActive;
    };

    $http.get("activity-data.json").then(function(response) {
        $scope.myData = response.data;
        console.log($scope.myData);
    });






});




app.controller('LineController', function($scope) {
    $scope.chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First Dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }, {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,150,192,0.4)",
            borderColor: "rgba(75,120,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(10,250,165,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(55,100,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [12, 50, 65, 15, 75, 95, 50],
            spanGaps: false,
        }, {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(70,150,192,0.4)",
            borderColor: "rgba(75,120,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(10,120,145,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(55,100,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [20, 35, 65, 45, 88, 72, 20],
            spanGaps: false,
        }]
    };
    $scope.chartOptions = {};

    $scope.onChartClick = function(event) {
        console.log('LineController', 'onChartClick', event);
    };
});