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




app.controller('LineController', function($scope, $interval) {
    $interval(function() {
        $scope.labels.push(Math.random() * 10);
    });
    $scope.chartData = {

        labels: [1, 2, 3, 4, 5],
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
            data: [1, 80, 65, 5, 55],
            spanGaps: false,
        }]
    };
    $scope.chartOptions = {
        scaleShowVerticalLines: false,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'right'

        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: { display: false },
                scaleLabel: {

                    display: true,
                    labelString: 'as'
                },
                time: {
                    unit: 'minute'
                }

            }],
            yAxes: [{

                display: true,
                scaleLabel: {

                    display: true,
                    labelString: 'da',

                },
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 50,
                    callback: function(value, index, values) {
                        return value + 'km';
                    }
                }
            }]
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart - Legend'
        }
    };

    $scope.onChartClick = function(event) {
        console.log('LineController', 'onChartClick', event);
    };
});




app.controller('newsController', function($scope) {
    $scope.newsItem = [{
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",

            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",

            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",

            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",

            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "../assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }

    ];




});