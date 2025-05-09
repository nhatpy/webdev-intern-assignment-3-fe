import { Button, Input, message } from "antd";
import { useEffect, useState } from "react";
import type { IScore } from "../utils";
import { useApi } from "../hooks";
import { scoreApis } from "../apis/scoreApis";

export const SearchScores = () => {
	const [registrationNumber, setRegistrationNumber] = useState<string>("");
	const [score, setScore] = useState<IScore | null>(null);
	const { errorMessage, loading, callApi: callScoreApi } = useApi<void>();

	const handleSearch = async () => {
		await callScoreApi(async () => {
			const { data } = await scoreApis.getBySbd(registrationNumber);
			if (data) {
				setScore(data);
			}
		});
	};
	useEffect(() => {
		if (errorMessage) {
			message.error(errorMessage, 3);
		}
	}, [errorMessage]);

	return (
		<div className="flex flex-col items-center justify-center mt-4 gap-8">
			<div className="bg-white shadow-md rounded-lg p-6 w-full">
				<h1 className="text-3xl font-bold">User Registration</h1>
				<p className="mt-4 text-xl">Registration Number:</p>
				<div className="flex items-center justify-center mt-4 w-1/2 gap-2">
					<Input
						placeholder="Enter your registration number"
						className="mt-2 mb-4 !p-3 hover:!border-black focus:!border-black focus:!outline-none"
						value={registrationNumber}
						onChange={(e) => setRegistrationNumber(e.target.value)}
						disabled={loading}
					/>
					<Button
						size="large"
						className="bg-black! !text-white !py-6 !px-8 hover:!border-black focus:!border-black focus:!outline-none"
						loading={loading}
						onClick={handleSearch}
						disabled={loading || !registrationNumber}
					>
						Submit
					</Button>
				</div>
			</div>
			<div className="bg-white shadow-md rounded-lg p-6 w-full">
				<h1 className="text-3xl font-bold mb-6">Detailed Scores</h1>
				{score && (
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base">
						<p>
							<span className="font-semibold">SBD:</span> {score.sbd || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Toán:</span> {score.toan || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Ngữ văn:</span>{" "}
							{score.ngu_van || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Ngoại ngữ:</span>{" "}
							{score.ngoai_ngu || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Vật lí:</span>{" "}
							{score.vat_li || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Hóa học:</span>{" "}
							{score.hoa_hoc || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Sinh học:</span>{" "}
							{score.sinh_hoc || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Lịch sử:</span>{" "}
							{score.lich_su || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Địa lí:</span>{" "}
							{score.dia_li || "N/A"}
						</p>
						<p>
							<span className="font-semibold">GDCD:</span> {score.gdcd || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Mã ngoại ngữ:</span>{" "}
							{score.ma_ngoai_ngu || "N/A"}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
