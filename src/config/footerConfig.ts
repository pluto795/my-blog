import type { FooterConfig } from "../types/config";

export const footerConfig: FooterConfig = {
	// 社交链接（mailto:/tel: 开头的链接不会在新标签打开）
	socialLinks: [
		{
			label: "GitHub",
			href: "https://github.com/pluto795",
			icon: "fa7-brands:github",
		},
		{
			label: "B站",
			href: "https://space.bilibili.com/9989207",
			icon: "fa7-brands:bilibili",
		},
		{
			label: "邮箱",
			href: "mailto:976238090@qq.com",
			icon: "material-symbols:mail",
		},
	],

	// 备案信息（icp/police 留空则不显示对应条目）
	beian: {
		icp: "",
		police: "",
		policeIcon: "",
		icpUrl: "",
		policeUrl: "",
	},

	// Powered by 信息
	poweredBy: [
		{ label: "框架", name: "Astro", href: "https://astro.build" },
		{
			label: "主题",
			name: "Firefly",
			href: "https://github.com/CuteLeaf/Firefly",
		},
	],
};
