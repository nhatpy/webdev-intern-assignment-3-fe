import { instance as axiosClient } from "../configs";

export const statisticApis = {
	getStatisticChart: async () => {
		return await axiosClient.get("/statistic/chart");
	},
	getStatisticTable: async () => {
		return await axiosClient.get("/statistic/table");
	}
};
