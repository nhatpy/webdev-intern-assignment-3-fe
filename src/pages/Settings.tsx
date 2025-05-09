import { useTranslation } from "react-i18next";
import { Select } from "antd";

export const Settings = () => {
	const { t, i18n } = useTranslation();

	const handleChange = (value: string) => {
		i18n.changeLanguage(value);
	};

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-xl font-bold">{t("settings")}</h1>
			<div className="flex items-center gap-2">
				<span>{t("language")}:</span>
				<Select
					className="w-1/12"
					defaultValue={i18n.language}
					onChange={handleChange}
					options={[
						{ value: "vi", label: "Tiếng Việt" },
						{ value: "en", label: "English" }
					]}
				/>
			</div>
		</div>
	);
};
