queue()
    .defer(d3.csv, 'data/ks-projects.csv')
    .await(makeCharts);
    
function makeCharts(error, projectsData) {
    
}