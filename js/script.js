/*

d3.csv("data/cities.csv", function(datasetText) {


});

*/
/*
d3.text("data/cities.csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);

    var container = d3.select(".bodyInfo")
		.selectAll("tr")
			.data(parsedCSV).enter()
			.append("tr")

    .selectAll("td")
        .data(function(d) {
            return d;
        }).enter()
        .append("td")
        .text(function(d) {
            return d;
        });
});*/


d3.text("data/cities.csv", function (datasetText) {
    var rows = d3.csv.parseRows(datasetText);
    var tbl = d3.select("#tableInfo")

    // headers
    tbl.append("thead").append("tr")
        .selectAll("th")
        .data(rows[0])
        .enter().append("th")
        .text(function(d) {
            return d;
        });

    // data
    tbl.append("tbody")
        .selectAll("tr").data(rows.slice(1))
        .enter().append("tr")

        .selectAll("td")
        .data(function(d){return d;})
        .enter().append("td")
        .text(function(d){return d;})
});