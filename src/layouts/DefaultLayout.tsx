import { Link, Outlet, useLocation } from "react-router-dom";
import { Layout, Menu, Drawer, Button, Grid } from "antd";
import { icons } from "../utils";
import { useTranslation } from "react-i18next";
import { useBoolean } from "../hooks";

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

export const DefaultLayout = () => {
	const location = useLocation();
	const { t } = useTranslation();
	const screens = useBreakpoint();
	const { value: drawerVisible, setTrue, setFalse } = useBoolean(false);

	const isMobile = !screens.xl;

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
			label: <Link to="/">{t("dashboard")}</Link>,
			icon: icons.home
		},
		{
			key: "searchScores",
			label: <Link to="/search">{t("search_scores")}</Link>,
			icon: icons.search
		},
		{
			key: "reports",
			label: <Link to="/report">{t("reports")}</Link>,
			icon: icons.chart
		},
		{
			key: "settings",
			label: <Link to="/setting">{t("settings")}</Link>,
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
					justifyContent: isMobile ? "space-between" : "center",
					padding: "0 1rem",
					fontSize: "1.5rem",
					fontWeight: "bold"
				}}
			>
				{isMobile && (
					<Button
						icon={icons.menu}
						type="text"
						onClick={setTrue}
						style={{ color: "#fff" }}
					/>
				)}
				G-Scores
			</Header>
			<Layout>
				{!isMobile ? (
					<Sider
						width={220}
						className="flex flex-col"
						style={{
							background: "linear-gradient(to bottom, #f5d020, #339989)"
						}}
					>
						<h3 className="text-lg font-bold text-black px-4 pt-6 pb-2">
							{t("menu")}
						</h3>
						<Menu
							selectedKeys={[getSelectedKey()]}
							items={menuItems}
							mode="inline"
							className="custom-menu"
							style={{ background: "transparent", height: "90%" }}
						/>
					</Sider>
				) : (
					<Drawer
						title={t("menu")}
						placement="left"
						onClose={setFalse}
						open={drawerVisible}
					>
						<Menu
							selectedKeys={[getSelectedKey()]}
							items={menuItems}
							mode="inline"
							onClick={setFalse}
						/>
					</Drawer>
				)}

				<Content className="bg-[#f5f6f7] p-6">
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};
