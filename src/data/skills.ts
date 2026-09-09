/**
 * 技能页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/skillsConfig.ts 控制。
 */
import type { SkillItem } from "@/types/skillsConfig";

export const skillsData: SkillItem[] = [
	{
		name: "Flutter",
		description: "构建 Windows 桌面端与跨平台应用，处理状态管理、网络请求和数据可视化。",
		icon: "simple-icons:flutter",
		category: "client",
		level: "advanced",
	},
	{
		name: "Dart",
		description: "用于 Flutter 应用开发，编写异步业务逻辑与可维护的类型化代码。",
		icon: "simple-icons:dart",
		category: "client",
		level: "advanced",
	},
	{
		name: "Python",
		description: "后端服务、自动化脚本、数据处理与 AI 应用开发。",
		icon: "simple-icons:python",
		category: "backend",
		level: "advanced",
	},
	{
		name: "FastAPI",
		description: "设计本地后端服务与 REST API，连接客户端、数据库和 AI 能力。",
		icon: "simple-icons:fastapi",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "SQLite",
		description: "本地关系型数据建模、查询、备份与应用数据持久化。",
		icon: "simple-icons:sqlite",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "C++",
		description: "算法、系统基础与性能敏感模块开发。",
		icon: "simple-icons:cplusplus",
		category: "system",
		level: "intermediate",
	},
	{
		name: "C",
		description: "理解底层运行机制、内存与计算机系统基础。",
		icon: "simple-icons:c",
		category: "system",
		level: "intermediate",
	},
	{
		name: "CMake",
		description: "组织和构建 C/C++ 工程。",
		icon: "simple-icons:cmake",
		category: "system",
		level: "intermediate",
	},
	{
		name: "AI Agent",
		description: "将大模型工具调用、学习数据与实际应用工作流结合。",
		icon: "material-symbols:smart-toy-outline-rounded",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "Git 与 GitHub Actions",
		description: "版本管理、开源协作、自动检查与持续部署。",
		icon: "simple-icons:githubactions",
		category: "tooling",
		level: "intermediate",
	},
];

/** 获取所有技能数据列表 */
export function getSkillsList(): SkillItem[] {
	return skillsData;
}
