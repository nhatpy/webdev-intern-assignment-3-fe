export const statisticTableConfig = [
	{
		title: "SBD",
		dataIndex: "sbd",
		key: "sbd",
		render: (text: string) => (
			<p className="flex justify-center items-center">{text}</p>
		)
	},
	{
		title: "Math",
		dataIndex: "toan",
		key: "toan",
		render: (text: number) => (
			<p className="flex justify-center items-center">{text}</p>
		)
	},
	{
		title: "Physics",
		dataIndex: "vat_li",
		key: "vat_li",
		render: (text: number) => (
			<p className="flex justify-center items-center">{text}</p>
		)
	},
	{
		title: "Chemistry",
		dataIndex: "hoa_hoc",
		key: "hoa_hoc",
		render: (text: number) => (
			<p className="flex justify-center items-center">{text}</p>
		)
	},
	{
		title: "Total Score",
		dataIndex: "totalScore",
		key: "totalScore",
		render: (text: number) => (
			<p className="flex justify-center items-center">{text}</p>
		)
	}
];
