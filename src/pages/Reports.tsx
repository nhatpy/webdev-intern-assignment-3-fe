import { message, Table } from "antd";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
} from "chart.js";
import {
	type IStatisticTable,
	type IStatisticChart,
	chartConfig,
	statisticTableConfig
} from "../utils";
import { useEffect, useState } from "react";
import { useApi } from "../hooks";
import { statisticApis } from "../apis/statisticApis";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const Reports = () => {
	const { errorMessage, loading, callApi: callStatisticApi } = useApi<void>();

	const [chartDataset, setChartDataset] = useState<IStatisticChart[]>([]);
	const [topGroupAStudents, setTopGroupAStudents] = useState<IStatisticTable[]>(
		[]
	);

	useEffect(() => {
		const fetchStatisticData = async () => {
			await callStatisticApi(async () => {
				const { data } = await statisticApis.getStatisticChart();
				if (data) {
					console.log(data);
					setChartDataset(data);
				}
			});
		};
		const fetchTopGroupAStudents = async () => {
			await callStatisticApi(async () => {
				const { data } = await statisticApis.getStatisticTable();
				if (data) {
					setTopGroupAStudents(data);
				}
			});
		};
		fetchStatisticData();
		fetchTopGroupAStudents();
	}, []);

	useEffect(() => {
		if (errorMessage) {
			message.error(errorMessage, 3);
		}
	}, [errorMessage]);

	const data = {
		labels: [">=8", "8 > && >=6", "6 > && >=4", "<4"],
		datasets: chartDataset.map((subjectData) => ({
			label: subjectData.subject,
			data: subjectData.studentCounts,
			backgroundColor: "rgba(75, 192, 192, 0.2)",
			borderColor: "rgba(75, 192, 192, 1)",
			borderWidth: 1
		}))
	};

	return (
		<div className="mx-auto bg-white p-8 shadow-lg rounded-lg">
			<h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
				Reports
			</h1>

			<div className="flex flex-col justify-center mb-4">
				<h1 className="text-3xl font-bold">Statistic Chart</h1>
				<div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
					<Bar data={data} options={chartConfig} />
				</div>
			</div>

			<div className="flex flex-col justify-center mb-4">
				<h1 className="text-3xl font-bold">Top 10 Students</h1>
				<div className="overflow-x-auto">
					<Table
						columns={statisticTableConfig.map((col) => ({
							...col,
							align: "center"
						}))}
						dataSource={topGroupAStudents}
						rowKey="sbd"
						pagination={false}
						loading={loading}
					/>
				</div>
			</div>
		</div>
	);
};
