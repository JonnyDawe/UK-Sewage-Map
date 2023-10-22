import styled from "@emotion/styled";
import { Theme as ThemePrimitive } from "@radix-ui/themes";
import { AppThemeContext } from "./ThemeProvider";
import React from "react";

const Theme = styled(ThemePrimitive)`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
`;

function GenericTheme({ children, className }: React.PropsWithChildren<{ className?: string }>) {
    const { theme } = React.useContext(AppThemeContext);
    return (
        <Theme className={`${className} ${theme.appearance} radix-themes`} {...theme}>
            {children}
        </Theme>
    );
}

export default GenericTheme;
