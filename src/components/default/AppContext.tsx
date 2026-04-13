"use client"

import { AppContextType } from "@/types/AppContextType";
import { createContext, useContext } from "react";

const defaultValue: AppContextType = {
    themeContext: {
        themeValue: "light",
        setThemeValue: () => {},
    },
    blogContext: {
        posts: [],
    }
}

const AppContext = createContext<AppContextType>(defaultValue);

export function useAppContext() {
    return useContext(AppContext);
}

export default AppContext;
