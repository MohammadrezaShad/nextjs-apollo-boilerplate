import React from 'react';

type ThemeProps = {
  theme?: string;
  toggleTheme?: () => Promise<void>;
};

const ThemeContext = React.createContext<ThemeProps>({});

export default ThemeContext;
