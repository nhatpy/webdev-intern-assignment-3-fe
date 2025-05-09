import { instance as axiosClient } from "../configs";

export const scoreApis = {
	getBySbd: async (sbd: string) => {
		return await axiosClient.get(`/score?sbd=${sbd}`);
	}
};
