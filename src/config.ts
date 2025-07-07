import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Li-QiuTing",
	subtitle: "QiuTing",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th' // 语言选项：英语、简体中文、繁体中文、日语、韩语、西班牙语、泰语
	themeColor: {
		hue: 129, // 主题颜色的默认色调，从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉红色：345
		fixed: false, // 隐藏访客的主题颜色选择器
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
		position: "center", // 相当于 object-position，仅支持 'top', 'center', 'bottom'，默认为 'center'
		credit: {
			enable: false, // 显示横幅图片的版权信息
			text: "", // 要显示的版权文本
			url: "", // (可选) 原始艺术作品或艺术家页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题深度，从 1 到 3
	},
	favicon: [
		// 将此数组留空以使用默认 favicon
		// {
		//   src: '/favicon/icon.png',    // favicon 的路径，相对于 /public 目录
		//   theme: 'light',              // (可选) 'light' 或 'dark'，仅在为亮色和暗色模式设置不同 favicon 时使用
		//   sizes: '32x32',              // (可选) favicon 的大小，仅在有不同尺寸的 favicon 时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "Telegram",
			url: "https://t.me/YuChen_5", // 内部链接不应包含基本路径，因为它会自动添加
			external: true, // 显示外部链接图标并在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "Li-QiuTing",
	bio: "我的个人博客",
	links: [
		{
			name: "Twitter",
			icon: "ic:baseline-telegram", // 访问 https://icones.js.org/ 获取图标代码
			// 如果图标集尚未包含，您需要安装相应的图标集
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://t.me/YuChen_5",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景颜色）已被覆盖，请查看 astro.config.mjs 文件
	// 请选择暗色主题，因为此博客主题目前仅支持暗色背景
	theme: "github-dark",
};