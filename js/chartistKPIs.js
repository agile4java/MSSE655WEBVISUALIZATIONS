

function chartist() {
    $("#page-header").text("Chartist KPIs");
    clearKPIs();

    var kpi1 = document.getElementById("kpi1");
    var chartistDiv1 = document.createElement("div");
    var attClass = document.createAttribute("class");
    attClass.value = "ct-chart ct-major-sixth";
    chartistDiv1.setAttributeNode(attClass);
    kpi1.appendChild(chartistDiv1);

    var kpi2 = document.getElementById("kpi2");
    var chartistDiv2 = document.createElement("div");
    var attClass = document.createAttribute("class");
    attClass.value = "ct-chart ct-major-sixth";
    chartistDiv2.setAttributeNode(attClass);
    kpi2.appendChild(chartistDiv2);

    var kpi3 = document.getElementById("kpi3");
    var chartistDiv3 = document.createElement("div");
    var attClass = document.createAttribute("class");
    attClass.value = "ct-chart ct-major-sixth";
    chartistDiv3.setAttributeNode(attClass);
    kpi3.appendChild(chartistDiv3);

    var kpi4 = document.getElementById("kpi4");
    var chartistDiv4 = document.createElement("div");
    var attClass = document.createAttribute("class");
    attClass.value = "ct-chart ct-double-octave";
    chartistDiv4.setAttributeNode(attClass);

    kpi4.appendChild(chartistDiv4);
    $("#chartistDiv4").innerWidth("90%");
    
    var data1 = {
        labels: ["1st Qtr", "2nd Qtr", "3rd Qtr", "4th Qtr"],
        series: [20, 15, 40, 30]
    };

    var options1 = {
        labelInterpolationFnc: function(value) {
            return value[0]
        }
    };

    var responsiveOptions = [
        ['screen and (min-width: 640px)', {
            chartPadding: 10,
            labelOffset: 10,
            labelDirection: 'explode',
            labelInterpolationFnc: function(value) {
                return value;
            }
        }],
        ['screen and (min-width: 1024px)', {
            labelOffset: 80,
            chartPadding: 20
        }]
    ];


    new Chartist.Pie(chartistDiv1, data1, options1, responsiveOptions);



    var data2 = {
        labels: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5", "Wk6", "Wk7", "Wk8"],
        series: [
            [1, 2, 3, 1, -2, 0, 1, 0],
            [-2, -1, -2, -1, -2, -1, -2, -1],
            [0, 0, 0, 1, 2, 2.5, 2, 1]
        ]
    };

    var options2 = {
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: false,
        fullWidth: true,
        axisX: {
            showGrid: false
        }
    };

    new Chartist.Line(chartistDiv2, data2, options2);
    

    
    var data3 = {
        labels: ["1st Qtr", "2nd Qtr", "3rd Qtr", "4th Qtr"],
        series: [
            [2, 4, 5, 6],
            [4, 6, 8, 7]
        ]
    };

    var options3 = {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true
    };
    
    new Chartist.Bar(chartistDiv3, data3, options3);
    

    
    var data4 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept",
            "Oct", "Nov", "Dec"],
        series: [
            [1, 4, 3, 2, 5, 2, 3, 1, 5, 4, 3, 4],
            [4, 7, 8, 6, 5, 8, 4, 6, 8, 7, 7, 8],
            [3, 4, 5, 7, 5, 4, 5, 6, 7, 6, 7, 5]
        ]
    };

    var options4 = {
        showPoint: false,
        lineSmooth: false,
        axisX: {
            showGrid: false
        },
        plugins: [
            Chartist.plugins.ctAxisTitle({
                axisY: {
                    axisTitle: "Sales ($millions)",
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: -1
                    },
                    flipTitle: true
                }
            })
        ]
    };
    
    new Chartist.Line(chartistDiv4, data4, options4);
    
    }


