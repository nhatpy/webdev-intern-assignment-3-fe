import { Link } from "react-router-dom";
import { icons } from "../utils";

export const Dashboard = () => {
	return (
		<div className="p-6 font-sans bg-gray-50 h-full flex items-center justify-center">
			<div className="max-w-3xl w-full bg-white p-8 shadow-lg rounded-lg">
				<h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
					Welcome to G-scores
				</h1>
				<div className="space-y-4">
					<p className="text-xl">
						Website tạo ra với mục đích Tra cứu điểm thi THPT 2024
					</p>
					<p className="text-xl">
						<strong className="font-semibold">Template Creator:</strong> Golden
						Owl Solutions
					</p>
					<p className="text-xl">
						<strong className="font-semibold">Creator:</strong> Đỗ Long Nhật
					</p>

					<h3 className="text-2xl font-semibold">Contact Information:</h3>
					<div className="flex flex-col space-y-2">
						<p className="flex items-center gap-3 text-lg">
							<span className="text-red-500">{icons.gmail}</span>{" "}
							dlnhatpy0301@gmail.com
						</p>
						<p className="flex items-center gap-3 text-lg">
							<span>{icons.phone}</span> 0943746109
						</p>
						<p className="flex items-center gap-3 text-lg">
							<span className="text-blue-500">{icons.github}</span>
							<Link to="https://github.com/nhatpy/webdev-intern-assignment-3-fe">
								Frontend Source
							</Link>
						</p>
						<p className="flex items-center gap-3 text-lg">
							<span className="text-blue-500">{icons.github}</span>
							<Link to="https://github.com/nhatpy/webdev-intern-assignment-3-be">
								Backend Source
							</Link>
						</p>
					</div>

					<p className="text-lg mt-6 italic text-gray-600">
						Feel free to explore the website and check the results for the 2024
						THPT exams!
					</p>
				</div>
			</div>
		</div>
	);
};
