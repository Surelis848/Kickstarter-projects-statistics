queue()
    .defer(d3.csv, 'data/ks-projects.csv')
    .await(makeCharts);

function makeCharts(error, projectData) {
    var ndx = crossfilter(projectData);

    show_categories(ndx);
    show_country(ndx);
    show_currency(ndx);
    show_goal(ndx);
    show_state(ndx);
    show_backers(ndx);

    dc.renderAll();
}

/*------------------------------Categories--------------------------*/

function show_categories(ndx) {
    var categoryDim = ndx.dimension(dc.pluck('main_category'));
    var categoryGroup = categoryDim.group();

    dc.barChart('#category_chart')
        .width(1100)
        .height(400)
        .margins({ top: 30, right: 30, bottom: 50, left: 80 })
        .dimension(categoryDim)
        .group(categoryGroup)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .yAxis().ticks(10);
}

/*------------------------------Country--------------------------*/

function show_country(ndx) {
    var countryDim = ndx.dimension(dc.pluck('country'));
    var countryGroup = countryDim.group();

    dc.pieChart('#country_chart')
        .height(400)
        .radius(150)
        .transitionDuration(500)
        .dimension(countryDim)
        .group(countryGroup)

}

function show_currency(ndx) {
    var currencyDim = ndx.dimension(dc.pluck('currency'));
    var currencyGroup = currencyDim.group();

    dc.pieChart('#currency_chart')
        .height(400)
        .radius(150)
        .transitionDuration(500)
        .dimension(currencyDim)
        .group(currencyGroup)

}

/*------------------------------Time Frame--------------------------*/

/*function show_date(ndx) {
    var dateDim = ndx.dimension(dc.pluck('launched'));
    var dateGroup = dateDim.group();
    
    dc.barChart('#launched_chart')
        .width(1200)
        .height(400)
        .margins({top: 30, right: 30, bottom: 50, left: 80})
        .dimension(dateDim)
        .group(dateGroup)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true);
}
*/

/*------------------------------Goals--------------------------*/
function show_goal(ndx) {
    var date_dim = ndx.dimension(dc.pluck('launched'));

    var min_date = date_dim.bottom(1)[0].date;
    var max_date = date_dim.top(1)[0].date;


    var goalDim = ndx.dimension(function(d) {
        return [d.lauched, d.goal];
    });
    
    var goalGroup = goalDim.group();
    
    dc.scatterPlot('#goals_pledged_chart')
        .width(768)
        .height(620)
        .x(d3.time.scale().domain([min_date, max_date]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel('Goals')
        .dimension(goalDim)
        .group(goalGroup);
}

/*------------------------------State--------------------------*/

function show_state(ndx) {
    var stateDim = ndx.dimension(dc.pluck('state'));
    var stateGroup = stateDim.group();

    dc.pieChart('#state_chart')
        .height(400)
        .radius(150)
        .transitionDuration(500)
        .dimension(stateDim)
        .group(stateGroup)

}

function show_backers(ndx) {
    var backersDim = ndx.dimension(dc.pluck('backers'));
    var backersGroup = backersDim.group();

    dc.pieChart('#backers_chart')
        .height(400)
        .radius(150)
        .transitionDuration(500)
        .dimension(backersDim)
        .group(backersGroup)

}
