var percent = 55;
 
var pie=d3.layout.pie()
        .value(function(d){return d})
        .sort(null);
 
var w=300,h=320;
 
var outerRadius=(w/2)-10;
var innerRadius=outerRadius-8;
 
var color = ['#ec1561','#2a3a46','#202b33'];
 
var arc=d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(0)
        .endAngle(2*Math.PI);
var arcLine=d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(0);