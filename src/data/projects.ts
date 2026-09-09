/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "studyos",
		title: "StudyOS",
		summary:
			"桌面优先的综合学习系统，整合学习仪表盘、AI 助手、错题整理、成绩分析与复盘计划。",
		category: "application",
		phase: "building",
		technologies: ["Flutter", "Dart", "Python", "FastAPI", "SQLite"],
		icon: "material-symbols:school-outline-rounded",
		featured: true,
		repository: "https://github.com/Lingfengalg/StudyOS",
		year: "2026",
	},
	{
		key: "bupt-scs-courses",
		title: "BUPT SCS 选修课指北",
		summary: "北京邮电大学计算机学院选修课程资料与经验指引。",
		category: "learning",
		phase: "shipped",
		technologies: ["北京邮电大学", "课程资料", "开源协作"],
		icon: "material-symbols:menu-book-outline-rounded",
		repository: "https://github.com/Lingfengalg/BUPT-SCS-Courses",
		year: "2026",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
