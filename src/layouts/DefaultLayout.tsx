import { Link, Outlet, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { icons } from "../utils";

const { Header, Sider, Content } = Layout;

export const DefaultLayout = () => {
	const location = useLocation();

	const getSelectedKey = () => {
		if (location.pathname.includes("/search")) return "searchScores";
		if (location.pathname.includes("/report")) return "reports";
		if (location.pathname.includes("/setting")) return "settings";
		if (location.pathname === "/") return "dashboard";
		return "";
	};

	const menuItems = [
		{
			key: "dashboard",
			label: <Link to="/">Dashboard</Link>,
			icon: icons.home
		},
		{
			key: "searchScores",
			label: <Link to="/search">Search Scores</Link>,
			icon: icons.search
		},
		{
			key: "reports",
			label: <Link to="/report">Reports</Link>,
			icon: icons.chart
		},
		{
			key: "settings",
			label: <Link to="/setting">Settings</Link>,
			icon: icons.settings
		}
	];

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Header
				style={{
					background: "#0a2647",
					color: "#ffffff",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "1.5rem",
					fontWeight: "bold"
				}}
			>
				G-Scores
			</Header>
			<Layout>
				<Sider
					width={220}
					className="flex flex-col"
					style={{
						background: "linear-gradient(to bottom, #f5d020, #339989)"
					}}
				>
					<h3 className="text-lg font-bold text-black px-4 pt-6 pb-2">Menu</h3>
					<Menu
						selectedKeys={[getSelectedKey()]}
						items={menuItems}
						mode="inline"
						className="custom-menu"
						style={{ background: "transparent", height: "90%" }}
					/>
				</Sider>
				<Content className="bg-[#f5f6f7] p-6">
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};
