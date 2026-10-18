import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告列表（sort 越大越靠前）
	items: [
		{
			tag: "上线",
			title: "博客上线",
			content: "基础配置已经完成，欢迎随便逛逛。",
			time: "2026-10-18",
			sort: 3,
		},
		{
			tag: "评论",
			title: "评论已开通",
			content: "文章和留言板都接入了 Waline，欢迎留言交流。",
			time: "2026-10-18",
			sort: 2,
		},
		{
			tag: "友链",
			title: "互换友链",
			content:
				"欢迎互换友链，申请前请先看友链页的说明，期待和你交换链接。",
			time: "2026-10-18",
			link: "/friends/",
			sort: 1,
		},
	],

	// 是否允许用户关闭公告
	closable: true,
};
