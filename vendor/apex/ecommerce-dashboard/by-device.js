// By Device
var options = {
	chart: {
		width: '100%',
		height: 185,
		type: 'donut',
	},
	series: [2000, 3000, 5000],
	labels: ["Tablet", "Mobile", "Desktop"],
	stroke: {
		width: 0,
	},
	// colors: ['#AD8A19', '#262b31', '#434950', '#63686f', '#868a90'],
	theme: {
		monochrome: {
			enabled: true,
			color: '#AD8A19',
		}
	},
}
var chart = new ApexCharts(
	document.querySelector("#by-device"),
	options
);
chart.render();