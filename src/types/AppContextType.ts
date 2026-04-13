import { Post } from "./Post";

export type ThemeOption = "light" | "dark";
export type Posts = Post[];

export interface ThemeContextType {
    themeValue: ThemeOption,
    setThemeValue: (value: ThemeOption) => void;
}

export interface BlogContextType { 
    posts: Posts
}

export interface AppContextType {
    themeContext: ThemeContextType,
    blogContext: BlogContextType
}
