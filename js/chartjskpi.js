function chartjs(){
    $("#page-header").text("Chartjs KPIs");
    clearKPIs();
    var canvas1 = document.createElement("canvas");
    var canvas2 = document.createElement("canvas");
    var canvas3 = document.createElement("canvas");
    var canvas4 = document.createElement("canvas");


    var kpi1 = document.getElementById("kpi1");
    var kpi2 = document.getElementById("kpi2");
    var kpi3 = document.getElementById("kpi3");
    var kpi4 = document.getElementById("kpi4");
    kpi1.appendChild(canvas1);
    kpi2.appendChild(canvas2);
    kpi3.appendChild(canvas3);
    kpi4.appendChild(canvas4);

    var ctx1 = canvas1.getContext("2d");
    var ctx2 = canvas2.getContext("2d");
    var ctx3 = canvas3.getContext("2d");
    var ctx4 = canvas4.getContext("2d");

    var chart1 = new Chart(ctx1, {
        type:  "line",
        data: {
            labels: ["1st", "2nd", "3rd", "4th"],
            datasets: [{
                label: "Revenue",
                data: [2.1, 2.75, 5.6, 4.9],
                backgroundColor: "rgb(255, 191, 0)"
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Millions"
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Quarters"
                    }
                }]
            }
        }
    });




    var chart2 = new Chart(ctx2, {
        type: "radar",
        data: {
            labels: ["20s", "30s", "40s", "50s", "60s"],
            datasets: [
                {
                    label: "1940",
                    fill: true,
                    backgroundColor: "rgba(179, 181, 198, 0.2)",
                    borderColor: "rgba(179, 181, 198, 1)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(179, 181, 198, 1)",
                    data: [10, 15, 40, 15, 10]
                }, {
                    label: "1980",
                    fill: true,
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    data: [25, 40, 32, 15, 10]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: "Distribution of World Population By Age Group"
            }
        }
    });

    var chart3 = new Chart(ctx3, {
       type: "bar",
       data: {
           labels: ["1st", "2nd", "3rd", "4th"],
           datasets: [{
               label: "Textiles",
               type: "line",
               borderColor: "#8e5ea2",
               data: [150, 225, 350, 180],
               fill: false
           }, {
               label: "Electronics",
               type: "line",
               borderColor: "#3e95cd",
               data: [75, 102, 90, 120],
           }, {
               label: "Processing",
               type: "bar",
               backgroundColor: "rgba(0, 0, 0, 0.2)",
               data: [190, 345, 250, 200],
           }, {
               label: "Outsourcing",
               type: "bar",
               backgroundColor: "rgba(0, 0, 0, 0.2)",
               data: [275, 250, 225, 200]
           }]
       },
       options: {
           title: {
               display: true,
               text: "Quarterly Income (millions)"
           },

       }
    });



    var chart4 = new Chart(ctx4, {
        type: "bubble",
        data: {

            datasets: [
                {
                    label: ["America"],
                    backgroundColor: "rgba(255, 221, 50, 0.2)",
                    borderColor: "rgba(255, 221, 50, 1)",
                    data: [{
                        x: 20,
                        y: 40,
                        r: 15
                    }, {
                        x: 30,
                        y: 52,
                        r: 18
                    }, {
                        x: 40,
                        y: 62,
                        r: 25,
                    }, {
                        x: 50,
                        y: 68,
                        r: 28
                    }, {
                        x: 60,
                        y: 42,
                        r: 18
                    }]
                }, {
                    label: ["England"],
                    backgroundColor: "rgba(60, 186, 59, 0.2)",
                    borderColor: "rgba(60, 186, 59, 1)",
                    data: [{
                        x: 20,
                        y: 30,
                        r: 10
                    }, {
                        x: 30,
                        y: 45,
                        r: 14
                    }, {
                        x: 40,
                        y: 52,
                        r: 17,
                    }, {
                        x: 50,
                        y: 38,
                        r: 28
                    }, {
                        x: 60,
                        y: 38,
                        r: 12
                    }]
                }, {
                    label: ["China"],
                    backgroundColor: "rgba(193, 46, 12, 0.2)",
                    borderColor: "rgba(193, 46, 12, 1)",
                    data: [{
                        x: 20,
                        y: 15,
                        r: 20
                    }, {
                        x: 30,
                        y: 18,
                        r: 35
                    }, {
                        x: 40,
                        y: 38,
                        r: 32,
                    }, {
                        x: 50,
                        y: 22,
                        r: 28
                    }, {
                        x: 60,
                        y: 52,
                        r: 20
                    }]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: "Government approval of voter participants by age group"
            }, scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Age group by decades"
                    }
                }],
                xAxes: [{
                    ticks: {
                        display: true,
                        tickDivision: 10
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "% of population that voted"
                    }
                }]
            }
        }
    });

}