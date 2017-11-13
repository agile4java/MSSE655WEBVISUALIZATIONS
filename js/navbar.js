

function clearKPIs(){
    for(i = 1; i < 5; i++){
        var kpi = "kpi" + i.toString();
        var dump = document.getElementById(kpi);
        dump.removeChild(dump.firstChild);
    }
}
function flotr2(){

    $("#page-header").text("Flotr2 Visuals");

    createKpi4Data();
    createKpi3Data();

    var kpi1Options = {
        title:  "Revenues",
        HtmlText: false,
        yaxis: {
            min: 0,
            tickDecimals: 1,
            title: "Millions"
        },
        xaxis: {
            autoscale: true,
            autoscaleMargin: 1,
            title: "Quarters",
            ticks: [[1, "1st"], [2, "2nd"], [3, "3rd"], [4, "4th"]]
        },
    };

    var kpi2Options = {
        title:  "Expenses",
        HtmlText: false,
        yaxis: {
            min: 0,
            tickDecimals: 1,
            title: "Millions"
        },
        xaxis: {
            autoscale: true,
            autoscaleMargin: 1,
            title: "Quarters",
            ticks: [[1, "1st"], [2, "2nd"], [3, "3rd"], [4, "4th"]]
        },
        bars: {show: true}
    };

    var kpi3Options = {
        title:  "Return vs. Investment",
        HtmlText: false,
        yaxis: {
            min: 0,
            max: 11,
            title: "Millions"
        },
        xaxis: {
            min: -0.5,
            max: 7.5,
            title: "Years"
        },
        grid: {
            verticalLines: false,
                backgroundColor: ['#fff', '#ccc']
        }
    };

    var kpi4Options = {
        title:  "Price",
        HtmlText: false,
        yaxis: {
            tickDecimals: 1,
            title: "Millions"
        },
        xaxis: {
            autoscale: true,
            autoscaleMargin: 1,
            title: "Days",
        },
        candles: {show: true, candleWidth: 0.6},
    };

    var kpi1 = document.getElementById("kpi1");
    Flotr.draw(kpi1, kpi1Data, kpi1Options);
    var kpi2 = document.getElementById("kpi2");
    Flotr.draw(kpi2, kpi2Data, kpi2Options);
    var kpi3 = document.getElementById("kpi3");
    Flotr.draw(kpi3,  [lines, bars], kpi3Options);
    var kpi4 = document.getElementById("kpi4");
    Flotr.draw(kpi4, [data4], kpi4Options);
}
function chartjs(){
    var canvas1 = document.createElement("canvas");
    var canvas2 = document.createElement("canvas");
    var canvas3 = document.createElement("canvas");
    var canvas4 = document.createElement("canvas");
    var ctx1 = canvas.getContext("2d");
    var ctx2 = canvas.getContext("2d");
    var ctx3 = canvas.getContext("2d");
    var ctx4 = canvas.getContext("2d");
    var kpi1 = document.getElementById("kpi1");
    var kpi2 = document.getElementById("kpi2");
    var kpi3 = document.getElementById("kpi3");
    var kpi4 = document.getElementById("kpi4");
    var chart1 = new Chart(ctx, {
        type:  "line",
        data: {
            datasets: [{
                data: [[1, 2.1], [2, 2.75], [3, 5.6], [4, 4.9]]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "MIllions"
                    }
                }],
                xAxes: [{
                    scaleLabel:
                }]
            }
        }
    })
}
function chartist(){}
function googleCharts(){}
function d3(){}
function leaflet(){}