var data4 = [];

function createKpi4Data(){

    while(data4.length > 0){
        data4.pop();
    }

    var price = 45;
    var graph;
    var i;
    var a;
    var b;
    var c;

    for(i = 0; i < 50; i++){
        a = Math.random();
        b = Math.random();
        c = (Math.random() * (a + b)) - b;
        data4.push([i, price, (price + a), (price - b), (price + c)]);
        price += c;
    }
}