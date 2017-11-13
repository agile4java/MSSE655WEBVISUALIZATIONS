var bars = {
    data: [],
    bars: {
        show: true,
        barWidth: 0.8,
        lineWidth: 0,
        fillColor: ["#CB4B4B", "#fff"],
        start: "top",
        end: "bottom"
    },
    fillOpacity: 0.8
};

var lines = {
    data: [],
    lines: {
        show: true,
            fillColor: ['#OOA8FO', '#fff'],
            fill: true,
            fillOpacity: 1
    }
};

var point;
var graph;
var i;



function createKpi3Data(){

    while(bars.data.length > 0){
        bars.data.pop();
    }

    while(lines.data.length > 0){
        lines.data.pop();
    }


    for(i = 0; i < 8; i++){
        point = [i, Math.ceil(Math.random() * 10)];
        bars.data.push(point);
    }

    for(i = -1; i < 9; i += 0.01){
        lines.data.push([i, i*i/8+2]);
    }
}