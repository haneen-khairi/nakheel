$(function () {

	var data = [
		{ label: "Series 0", data: 1, color: '#AD8A19' },
		{ label: "Series 1", data: 3, color: '#262b31' },
		{ label: "Series 2", data: 9, color: '#434950' },
		{ label: "Series 3", data: 20, color: '#63686f'  }
	];
	

	var plotObj = $.plot($("#flotPieChart"), data, {
		series: {
			pie: {
				show: true,
				radius: 1,
				label: {
					show: true,
					radius: 3/4,
					// formatter: labelFormatter,
					background: {
						opacity: 0.5,
						color: '#ffffff'
					}
				}
			}
		},
		grid: {
			hoverable: true
		},
		tooltip: {
			show: true,
			content: "%p.0%, %s, n=%n",
			shifts: {
				x: 20,
				y: 0
			},
			defaultTheme: false
		}
	});
	
});