import { Button, Input } from "antd";
import type { IScore } from "../utils";

const dummy: IScore = {
	sbd: "0123456",
	toan: 0,
	ngu_van: 0,
	ngoai_ngu: 0,
	vat_li: 0,
	hoa_hoc: 0,
	sinh_hoc: 0,
	lich_su: 0,
	dia_li: 0,
	gdcd: 0,
	ma_ngoai_ngu: "N1"
};

export const SearchScores = () => {
	return (
		<div className="flex flex-col items-center justify-center mt-4 gap-8">
			<div className="bg-white shadow-md rounded-lg p-6 w-full">
				<h1 className="text-3xl font-bold">User Registration</h1>
				<p className="mt-4 text-xl">Registration Number:</p>
				<div className="flex items-center justify-center mt-4 w-1/2 gap-2">
					<Input
						placeholder="Enter your registration number"
						className="mt-2 mb-4 !p-3 hover:!border-black focus:!border-black focus:!outline-none"
					/>
					<Button
						size="large"
						className="bg-black! !text-white !py-6 !px-8 hover:!border-black focus:!border-black focus:!outline-none"
					>
						Submit
					</Button>
				</div>
			</div>
			<div className="bg-white shadow-md rounded-lg p-6 w-full">
				<h1 className="text-3xl font-bold mb-6">Detailed Scores</h1>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base">
					<p>
						<span className="font-semibold">SBD:</span> {dummy.sbd}
					</p>
					<p>
						<span className="font-semibold">Toán:</span> {dummy.toan}
					</p>
					<p>
						<span className="font-semibold">Ngữ văn:</span> {dummy.ngu_van}
					</p>
					<p>
						<span className="font-semibold">Ngoại ngữ:</span> {dummy.ngoai_ngu}
					</p>
					<p>
						<span className="font-semibold">Vật lí:</span> {dummy.vat_li}
					</p>
					<p>
						<span className="font-semibold">Hóa học:</span> {dummy.hoa_hoc}
					</p>
					<p>
						<span className="font-semibold">Sinh học:</span> {dummy.sinh_hoc}
					</p>
					<p>
						<span className="font-semibold">Lịch sử:</span> {dummy.lich_su}
					</p>
					<p>
						<span className="font-semibold">Địa lí:</span> {dummy.dia_li}
					</p>
					<p>
						<span className="font-semibold">GDCD:</span> {dummy.gdcd}
					</p>
					<p>
						<span className="font-semibold">Mã ngoại ngữ:</span>{" "}
						{dummy.ma_ngoai_ngu}
					</p>
				</div>
			</div>
		</div>
	);
};
