import { Button, Input, message } from "antd";
import { useEffect, useState } from "react";
import type { IScore } from "../utils";
import { useApi } from "../hooks";
import { scoreApis } from "../apis/scoreApis";
import { useSearchParams } from "react-router-dom";

export const SearchScores = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [registrationNumber, setRegistrationNumber] = useState<string>(
		searchParams.get("sbd") || ""
	);
	const [score, setScore] = useState<IScore | null>(null);
	const { errorMessage, loading, callApi: callScoreApi } = useApi<void>();

	const handleChangeParams = () => {
		setSearchParams({ sbd: registrationNumber });
	};
	const handleSearch = async (sbd: string) => {
		setSearchParams({ sbd: registrationNumber });
		await callScoreApi(async () => {
			const { data } = await scoreApis.getBySbd(sbd);
			if (data) {
				setScore(data);
			}
		});
	};
	useEffect(() => {
		const sbd = searchParams.get("sbd");
		if (sbd) {
			handleSearch(sbd);
		}
	}, [searchParams]);

	useEffect(() => {
		if (errorMessage) {
			message.error(errorMessage, 3);
		}
	}, [errorMessage]);

	return (
		<div className="flex flex-col items-center justify-center mt-4 gap-8 px-4">
			<div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
				<h1 className="text-2xl sm:text-3xl font-bold">User Registration</h1>
				<p className="mt-4 text-lg sm:text-xl">Registration Number:</p>
				<div className="flex flex-col sm:flex-row items-center sm:justify-start mt-4 gap-2">
					<Input
						placeholder="Enter your registration number"
						className="!p-3 w-full sm:w-2/3 hover:!border-black focus:!border-black focus:!outline-none"
						value={registrationNumber}
						onChange={(e) => setRegistrationNumber(e.target.value)}
						disabled={loading}
					/>
					<Button
						size="large"
						className="bg-black! !text-white !py-6 !px-8 w-full sm:w-auto hover:!border-black focus:!border-black focus:!outline-none"
						loading={loading}
						onClick={handleChangeParams}
						disabled={loading || !registrationNumber}
					>
						Submit
					</Button>
				</div>
			</div>

			<div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
				<h1 className="text-2xl sm:text-3xl font-bold mb-6">Detailed Scores</h1>
				{score && (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm sm:text-base">
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
