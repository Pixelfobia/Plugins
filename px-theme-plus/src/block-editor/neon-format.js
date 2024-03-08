import "./neon.css";
import { registerFormatType, toggleFormat } from "@wordpress/rich-text";
import { RichTextToolbarButton } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

registerFormatType("px-theme-plus/neon", {
	title: __("Neon", "px-theme-plus"),
	tagName: "span",
	edit({ isActive, onChange, value }) {
		return (
			<RichTextToolbarButton 
				title={__("Neon", "px-theme-plus")}
				icon="superhero"
				isActive={isActive}
				onClick={() => {
					onChange(
						toggleFormat(value, {
							type: "px-theme-plus/neon",
					})
					);
				}}
			/>
		);
	},
});