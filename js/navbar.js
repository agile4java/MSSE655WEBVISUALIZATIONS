

function clearKPIs(){
    for(i = 1; i < 5; i++){
        var kpi = "kpi" + i.toString();
        var dump = document.getElementById(kpi);
        while(dump.hasChildNodes()) {
            dump.removeChild(dump.firstChild);
        }
    }
}



