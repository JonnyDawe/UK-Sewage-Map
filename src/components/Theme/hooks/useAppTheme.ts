import React from "react";

import { AppThemeContext } from "../ThemeContext";

export const useAppTheme = () => React.useContext(AppThemeContext);
