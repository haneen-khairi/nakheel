var options = {
	chart: {
		width: 259,
		type: 'donut',
	},
	labels: ['Good', 'Bad', 'Dead'],
	series: [60000, 45000, 15000],
	legend: {
		position: 'bottom',
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		width: 0,
	},
	colors: ['#AD8A19', '#262b31', '#434950', '#63686f', '#868a90'],
	tooltip: {
		y: {
			formatter: function(val) {
				return  "" + val
			}
		}
	},
}
var chart = new ApexCharts(
	document.querySelector("#budget"),
	options
);
chart.render();