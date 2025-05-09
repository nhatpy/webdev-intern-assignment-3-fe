export const chartConfig = {
	responsive: true,
	plugins: {
		title: {
			display: true,
			text: "Statistics of Student Scores by Subject"
		},
		legend: {
			position: "top" as const
		}
	},
	scales: {
		y: {
			beginAtZero: true
		}
	}
};
