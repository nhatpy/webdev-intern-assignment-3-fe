import { createBrowserRouter } from "react-router-dom";
import { PATH } from "../utils";
import { DefaultLayout } from "../layouts";
import { Dashboard, Reports, SearchScores, Settings } from "../pages";

export const router = createBrowserRouter([
	{
		path: PATH.dashboard,
		element: <DefaultLayout />,
		children: [
			{
				path: "",
				element: <Dashboard />
			},
			{
				path: PATH.reports,
				element: <Reports />
			},
			{
				path: PATH.searchScores,
				element: <SearchScores />
			},
			{
				path: PATH.settings,
				element: <Settings />
			}
		]
	}
]);
