var app = angular.module("myApp", ['ngRoute', 'chart.js', 'tc.chartjs', 'wu.masonry']);
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





app.directive('hcLineChart', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            options: '='
        },
        link: function(scope, element) {
            Highcharts.chart(element[0], scope.options);
        }
    };
});


app.directive('hcColumnChart', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            title: '@',
            data: '='
        },
        link: function(scope, element) {
            Highcharts.chart(element[0], {
                chart: {
                    type: 'column',
                    width: $('hc-column-chart').parent().width() - 30
                },

                title: {
                    text: 'Total fruit consumtion, grouped by gender'
                },

                xAxis: {
                    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                },

                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    title: {
                        text: 'Number of fruits'
                    }
                },

                tooltip: {
                    formatter: function() {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            'Total: ' + this.point.stackTotal;
                    }
                },

                plotOptions: {
                    column: {
                        stacking: 'normal'
                    }
                },
                series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2],
                    stack: 'male'
                }, {
                    name: 'Joe',
                    data: [3, 4, 4, 2, 5],
                    stack: 'male'
                }, {
                    name: 'Jane',
                    data: [2, 5, 6, 2, 1],
                    stack: 'female'
                }, {
                    name: 'Janet',
                    data: [3, 0, 4, 4, 3],
                    stack: 'female'
                }]
            });
        }
    };
});


app.directive('hcPieChart', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            title: '@',
            data: '='
        },
        link: function(scope, element) {
            Highcharts.chart(element[0], {
                chart: {
                    type: 'pie',
                    width: 400
                },
                title: {
                    text: scope.title
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    pie: {

                        innerSize: 180,
                        depth: 20,
                        showInLegend: true,
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    data: scope.data
                }]
            });
        }
    };
});

app.controller('myController', function($scope) {

    // Sample options for first chart
    $scope.chartOptions = {
        title: {
            text: 'Temperature data'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        credits: {
            enabled: false
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },

        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }]
    };

    // Sample data for pie chart
    $scope.pieData = [{
        name: "Zona 01",
        y: 10
    }, {
        name: "Zona 02",
        y: 2
            /* sliced: true,
            selected: true */
    }, {
        name: "Zona 03",
        y: 15
    }, {
        name: "Zona 04",
        y: 13.5
    }];
});

app.controller('classCtrl', function($scope, $http, $timeout) {
    $scope.menuItems = [{
            "href": "#!chart",
            "text": "Analytics",
            "logoLocation": "assets/analityc.png"
        },
        {
            "href": "#!news",
            "text": "News",
            "logoLocation": "assets/newspaper-o.png"
        },
        {
            "href": "#!news",
            "text": "Board Brief",
            "logoLocation": "assets/board-brief.png"
        },
        {
            "href": "#!news",
            "text": "Briefcase",
            "logoLocation": "assets/briefcase.png"
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
            "newsImg": "assets/list-box-im1.png",

            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",

            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
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
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }, {
            "title": "Chain Store Age",
            "date": "Feb 22, 2016",
            "caption": "Billabong taps NetSuite to power omnichannel strategy",
            "newsImg": "assets/list-box-im1.png",
            "desc": "Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...",
            "thumbs": "132"
        }

    ];




});