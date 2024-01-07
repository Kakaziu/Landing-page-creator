import { render } from '@testing-library/react';
import MyThemeProvider from './MyThemeProvider';

const renderTheme = (children) => {
  return render(<MyThemeProvider>{children}</MyThemeProvider>);
};

export default renderTheme;
