function d3Draw(){
    clearKPIs();

    var data4d3 = [25, 20, 40, 45, 60, 65, 75, 80];




    d3.select("#kpi4")
        .selectAll("div")
        .data(data4d3)
        .enter()
        .append("div")
        .attr("id", "d3Bar")
        .style("width", function(d) {return (d) + "vw";})
        .style("height", "3vh")
        .text(function(d){return d;});
}