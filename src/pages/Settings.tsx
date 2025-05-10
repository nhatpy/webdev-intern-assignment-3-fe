import { useTranslation } from "react-i18next";
import { Select } from "antd";

export const Settings = () => {
	const { t, i18n } = useTranslation();

	const handleChange = (value: string) => {
		i18n.changeLanguage(value);
	};

	return (
		<div className="p-4 space-y-4">
			<h1 className="text-xl font-bold md:text-4xl">{t("settings")}</h1>
			<div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 md:text-2xl">
				<span>{t("language")}:</span>
				<Select
					className="w-full md:w-1/4"
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
