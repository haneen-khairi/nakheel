var options = {
	chart: {
		width: 400,
		type: 'pie',
	},
	labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
	series: [20, 20, 20, 20, 20],
	responsive: [{
		breakpoint: 480,
		options: {
			chart: {
				width: 200
			},
			legend: {
				position: 'bottom'
			}
		}
	}],
	stroke: {
		width: 0,
	},
	fill: {
		type: 'gradient',
	},
	colors: ['#AD8A19', '#262b31', '#434950', '#63686f', '#868a90'],
}
var chart = new ApexCharts(
	document.querySelector("#basic-pie-graph-gradient"),
	options
);
chart.render();