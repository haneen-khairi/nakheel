new Chartist.Bar('.barChartOrders', {
	labels: ['Not Completed Tasks', 'Completed Tasks' , 'Total Tasks' ],
	series: [
		// [
		// 	{meta: 'Online', value: 9000},
		// 	{meta: 'Online', value: 200},
		// 	{meta: 'Online', value: 1000}, 
		// ],
		[
			{meta: 'Total Tasks', value: 7000}, 
			{meta: 'Completed Tasks', value: 5000},
			{meta: 'Not Completed Tasks', value: 3000},
		],
	],
}, {
	reverseData: true,
	seriesBarDistance: 15,
	height: "130px",
	chartPadding: {
		right: 0,
		left: 20,
		top: 0,
		bottom: 0,
	},
	axisY: {
		offset: 30
	},
	plugins: [
		Chartist.plugins.tooltip()
	],
});
