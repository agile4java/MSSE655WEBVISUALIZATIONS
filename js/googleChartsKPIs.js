function googleCharts(){
    clearKPIs();
    $("#page-header").text("Google Charts KPIs");
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.load("current", {packages:["timeline"]});
    google.charts.setOnLoadCallback(drawGoogleChart);

    function drawGoogleChart(){
        var data1 = google.visualization.arrayToDataTable([
            ['Year', 'Male', 'Female'],
            ['20s', 91, 87],
            ['30s', 142, 167],
            ['40s', 122, 135],
            ['50s', 88, 90],
            ['60s', 53, 39]
        ]);

        var chart1 = new google.visualization.ColumnChart(document.getElementById('kpi1'));
        chart1.draw(data1);

        var data2 = google.visualization.arrayToDataTable([
            ['Dinosaur', 'Length'],
            ['Acrocanthosaurus (top-spined lizard)', 12.2],
            ['Albertosaurus (Alberta lizard)', 9.1],
            ['Allosaurus (other lizard)', 12.2],
            ['Apatosaurus (deceptive lizard)', 22.9],
            ['Archaeopteryx (ancient wing)', 0.9],
            ['Argentinosaurus (Argentina lizard)', 36.6],
            ['Baryonyx (heavy claws)', 9.1],
            ['Brachiosaurus (arm lizard)', 30.5],
            ['Ceratosaurus (horned lizard)', 6.1],
            ['Coelophysis (hollow form)', 2.7],
            ['Compsognathus (elegant jaw)', 0.9],
            ['Deinonychus (terrible claw)', 2.7],
            ['Diplodocus (double beam)', 27.1],
            ['Dromicelomimus (emu mimic)', 3.4],
            ['Gallimimus (fowl mimic)', 5.5],
            ['Mamenchisaurus (Mamenchi lizard)', 21.0],
            ['Megalosaurus (big lizard)', 7.9],
            ['Microvenator (small hunter)', 1.2],
            ['Ornithomimus (bird mimic)', 4.6],
            ['Oviraptor (egg robber)', 1.5],
            ['Plateosaurus (flat lizard)', 7.9],
            ['Sauronithoides (narrow-clawed lizard)', 2.0],
            ['Seismosaurus (tremor lizard)', 45.7],
            ['Spinosaurus (spiny lizard)', 12.2],
            ['Supersaurus (super lizard)', 30.5],
            ['Tyrannosaurus (tyrant lizard)', 15.2],
            ['Ultrasaurus (ultra lizard)', 30.5],
            ['Velociraptor (swift robber)', 1.8]]);

        var options2 = {
            title: 'Lengths of whales in meters',
            legend: { position: 'none' },
        };

        var chart2 = new google.visualization.Histogram(document.getElementById('kpi2'));
        chart2.draw(data2, options2);

        var dataTable3 = new google.visualization.DataTable();

        dataTable3.addColumn({ type: 'string', id: 'Term' });
        dataTable3.addColumn({ type: 'string', id: 'Name' });
        dataTable3.addColumn({ type: 'date', id: 'Start' });
        dataTable3.addColumn({ type: 'date', id: 'End' });

        dataTable3.addRows([
            [ '1', 'Spring Fashion Line', new Date(2015, 2, 1), new Date(2015, 5, 1) ],
            [ '2', 'Summer Clothing',        new Date(2015, 4, 1),  new Date(2015, 7, 1) ],
            [ '3', 'Autumn Fashions',  new Date(2015, 6, 1),  new Date(2015, 9, 1) ],
            ['4', 'Winter Clothing', new Date(2015, 8, 1), new Date(2015, 11, 31)]
        ]);

        var container3 = document.getElementById("kpi3");

        var chart3 = new google.visualization.Timeline(container3);

        chart3.draw(dataTable3);

        var data4 = google.visualization.arrayToDataTable([
            ['Year', 'Company', 'Competitors'],
            ['2010', 700, 600],
            ['2011', 750, 500],
            ['2012', 800, 450],
            ['2013', 850, 400],
            ['2014',  950, 460],
            ['2015',  860, 1120],
            ['2016',  1100, 540]
        ]);

        var options4 = {
            title: 'Competitors vs Company',
            hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
        };

        var chart4 =
            new google.visualization.AreaChart(document.getElementById('kpi4'));
        chart4.draw(data4, options4);
    }


}