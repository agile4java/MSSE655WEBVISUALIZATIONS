function flotr2(){

    $("#page-header").text("Flotr2 Visuals");
    clearKPIs();
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