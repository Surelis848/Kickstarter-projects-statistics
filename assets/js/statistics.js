queue()
    .defer(d3.csv, 'data/ks-projects.csv')
    .await(makeCharts);

function makeCharts(error, projectData) {
    var ndx = crossfilter(projectData);
    var parseDate = d3.time.format("%d/%m/%Y").parse;

    projectData.forEach(function(d) {
        d.launched = parseDate(d.launched);
        d.goal = parseInt(d['goal']);
        d.pledged = parseInt(d['pledged']);
        d.backers = parseInt(d['backers']);
    });

    show_categories(ndx);
    show_country(ndx);
    show_currency(ndx);
    ///show_goal_pledged(ndx);
    show_state(ndx);
    show_backers(ndx);

    dc.renderAll();
}

/*------------------------------Categories--------------------------*/

function show_categories(ndx) {
    var categoryDim = ndx.dimension(dc.pluck('main_category'));
    var categoryGroup = categoryDim.group();

    dc.rowChart('#category_chart')
        .width(992)
        .height(500)
        .dimension(categoryDim)
        .group(categoryGroup)
        .transitionDuration(500)
        .elasticX(true)
        .controlsUseVisibility(true);
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
        .legend(dc.legend().x(220).y(20).itemHeight(15).gap(5));
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
        .legend(dc.legend().x(220).y(20).itemHeight(15).gap(5));
}

/*------------------------------Time Frame--------------------------*/
/*function show_periods(ndx) {
    var periodsDim = 
}*/
/*------------------------------Goals--------------------------*/

/*function show_goal_pledged(ndx) {
    var dateDim = ndx.dimension(dc.pluck('launched'));
    var minDate = dateDim.bottom(1)[0].launched;
    var maxDate = dateDim.top(1)[0].launched;

    function numbers_by_type(type) {
        return function(d) {
            if (d.type === name) {
                return +d.spend;
            }
            else {
                return 0;
            }
        }
    }
    var  = date_dim.group().reduceSum(spend_by_name('Tom'));
    var bobSpendByMonth = date_dim.group().reduceSum(spend_by_name('Bob'));

    var aliceSpendByMonth = date_dim.group().reduceSum(spend_by_name('Alice'));

}*/

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
        .legend(dc.legend().x(220).y(20).itemHeight(15).gap(5));
}

function show_backers(ndx) {
    var backersDim = ndx.dimension(function (d) {
            if (d.backers < 11)
                return '0-10';
            else if (d.backers < 51)
                return '11-50';
            else if (d.backers < 101)
                return '51-100';
            else if (d.backers < 201)
                return '101-200';
            else if (d.backers < 501)
                return '201-500';
            else if (d.backers < 1001)
                return '501-1000';
            else
                return '1001-'
        });

    var backersGroup = backersDim.group();

    dc.pieChart('#backers_chart')
        .height(400)
        .radius(150)
        .transitionDuration(500)
        .dimension(backersDim)
        .group(backersGroup)
        .legend(dc.legend().x(220).y(20).itemHeight(15).gap(5));
}
